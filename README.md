# minecraft-server-api
minecraftサーバーの再起動、開始、停止ができる基本的なプログラム
### 使い方
各ファイルをサーバーと同じ階層に設置してサーバーファイル名をserver.jarにする
nodejsのexpressとshelljsをその階層にインストールしてindex.jsを実行(node index.js)
そして3000でlistenするのでipaddress:3000/api/startにアクセスでサーバースタート/api/stopで停止/api/restartで再起動
