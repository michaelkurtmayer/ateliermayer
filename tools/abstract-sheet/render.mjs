// Renders sheet.html to abstract.png (1720 x 2436), the Work page thumbnail of the
// abstract slide on the Aménagement de Routhierville page (the slide itself is live
// text, in projects/amenagement-de-routhierville/index.md: change the text in both).
// Picks the largest text size (in 0.5 px steps) that still fits the sheet.
// Run from the Website folder:  node tools/abstract-sheet/render.mjs
// Needs Google Chrome (uses the Mac's Helvetica Neue, like the site).
import { spawn } from 'node:child_process';
import { writeFileSync, mkdtempSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

const here = resolve('tools/abstract-sheet');
const out = resolve('projects/amenagement-de-routhierville/images');
const port = 9361;
const chrome = spawn('/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  ['--headless=new', '--disable-gpu', '--hide-scrollbars', `--remote-debugging-port=${port}`,
   `--user-data-dir=${mkdtempSync(join(tmpdir(), 'abstract-sheet-'))}`, 'about:blank'], { stdio: 'ignore' });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
let target;
for (let i = 0; i < 50 && !target; i++) { await sleep(200); try { target = (await (await fetch(`http://127.0.0.1:${port}/json/list`)).json()).find((t) => t.type === 'page'); } catch {} }
const ws = new WebSocket(target.webSocketDebuggerUrl);
await new Promise((r) => ws.addEventListener('open', r));
let id = 0; const pending = new Map();
ws.addEventListener('message', (e) => { const m = JSON.parse(e.data); if (m.id && pending.has(m.id)) { pending.get(m.id)(m.result); pending.delete(m.id); } });
const send = (method, params = {}) => new Promise((r) => { pending.set(++id, r); ws.send(JSON.stringify({ id, method, params })); });
const ev = async (expr) => (await send('Runtime.evaluate', { expression: expr, awaitPromise: true, returnByValue: true })).result.value;

await send('Page.enable');
await send('Emulation.setDeviceMetricsOverride', { width: 860, height: 1218, deviceScaleFactor: 2, mobile: false });
await send('Page.navigate', { url: pathToFileURL(join(here, 'sheet.html')).href });
await sleep(1500);
// largest size whose text ends above the bottom margin (56 px)
const fs = await ev(`(async () => {
  const sheet = document.getElementById('sheet');
  let best = 16;
  for (let s = 16; s <= 32; s += 0.5) {
    document.body.style.setProperty('--fs', s + 'px');
    await document.fonts.ready;
    const last = sheet.lastElementChild.getBoundingClientRect().bottom;
    if (last <= 1218 - 56) best = s;
  }
  document.body.style.setProperty('--fs', best + 'px');
  return best;
})()`);
console.log('text size', fs, 'px (sheet 860 px wide)');
for (const [scale, name] of [[2, 'abstract.png']]) {
  await send('Emulation.setDeviceMetricsOverride', { width: 860, height: 1218, deviceScaleFactor: scale, mobile: false });
  await sleep(500);
  const shot = await send('Page.captureScreenshot', { format: 'png', captureBeyondViewport: false });
  writeFileSync(join(out, name), Buffer.from(shot.data, 'base64'));
  console.log('wrote', join(out, name));
}
ws.close(); chrome.kill();
