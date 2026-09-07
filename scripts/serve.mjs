import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { resolve, extname } from 'node:path';
const root = process.cwd();
/** @type {Record<string,string>} */
const types = {'.html':'text/html; charset=utf-8','.css':'text/css','.js':'text/javascript','.png':'image/png','.svg':'image/svg+xml'};
createServer(async (req,res) => {
 try {
 const path = resolve(root, '.' + decodeURIComponent(new URL(req.url || '/', 'http://localhost').pathname).replace(/\/$/, '/index.html'));
 if (!path.startsWith(root + '/')) { res.writeHead(403).end(); return; }
 const body = await readFile(path); res.writeHead(200, {'Content-Type':types[extname(path)] || 'application/octet-stream'}).end(body);
 } catch { res.writeHead(404).end('Não encontrado'); }
}).listen(3017, '127.0.0.1', () => console.log('http://127.0.0.1:3017'));
