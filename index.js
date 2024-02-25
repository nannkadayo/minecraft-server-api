const express = require("express");
const app = express();
const shell = require('shelljs')
// レスポンスのデータ
const responseObjectData = {
  status : {
    status: 'success',
  },
 
};
const responsestopData = {
  textObject1 : {
    status: 'success',
  },
 
};
app.get("/api/start", function(req, res, next) {
  // CORS対応
//シェルスクリプトを実行
shell.exec('sh start.sh')
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header(
    'Access-Control-Allow-Headers',
    'Content-Type, Authorization, access_token'
  );
  // データの返却
  res.json(responseObjectData);
});
app.get("/api/restart", function(req, res, next) {
  // CORS対応
//シェルスクリプトを実行
shell.exec('sh restart.sh')
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header(
    'Access-Control-Allow-Headers',
    'Content-Type, Authorization, access_token'
  );
  // データの返却
  res.json(responseObjectData);
});
app.get("/api/stop", function(req, res, next) {
	  // CORS対応
	 //シェルスクリプトを実行
	 shell.exec('sh stop.sh')
	   res.header('Access-Control-Allow-Origin', '*');
	     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	      res.header(
	          'Access-Control-Allow-Headers',
	               'Content-Type, Authorization, access_token'
	                 );
	                   // データの返却
	                     res.json(responseObjectData);
	                     });
// ポート3000番でlistenする
app.listen(3000);
console.log("ready!")
