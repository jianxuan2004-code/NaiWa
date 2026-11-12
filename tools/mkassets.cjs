// Builds assets.js (logo + model + textures as data URIs) so the game works from file:// without a server.
const fs=require('fs'),path=require('path');
const A=path.join(__dirname,'..','assets');
const uri=(f,t)=>'data:'+t+';base64,'+fs.readFileSync(path.join(A,f)).toString('base64');
const o={logo:uri('logo.png','image/png'),albedo:uri('model/albedo.jpg','image/jpeg'),normal:uri('model/normal.jpg','image/jpeg'),rough:uri('model/rough.jpg','image/jpeg'),
  sfx:{laugh1:uri('sfx/laugh1.mp3','audio/mpeg'),laugh2:uri('sfx/laugh2.mp3','audio/mpeg')},
  model:fs.readFileSync(path.join(A,'model/model.json'),'utf8')};
fs.writeFileSync(path.join(__dirname,'..','assets.js'),'window.ASSETS='+JSON.stringify(o)+';\n');
