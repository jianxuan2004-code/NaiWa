const http=require('http'),fs=require('fs'),path=require('path');
const types={'.html':'text/html;charset=utf-8','.js':'text/javascript','.png':'image/png'};
http.createServer((q,r)=>{let f=path.join(__dirname,q.url.split('?')[0]==='/'?'index.html':decodeURIComponent(q.url.split('?')[0]));
fs.readFile(f,(e,d)=>{if(e){r.writeHead(404);r.end();return}r.writeHead(200,{'Content-Type':types[path.extname(f)]||'application/octet-stream'});r.end(d)})}).listen(8765);
