const express = require('express');
const app = express();
const port = 3000;

// 取得機器資訊
const os = require('os');
const hostname = os.hostname();
const platform = os.platform();
const release = os.release();

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Simple Docker App</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            text-align: center;
            padding: 50px;
            background-color: #f0f0f0;
          }
          .container {
            background-color: white;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            max-width: 600px;
            margin: 0 auto;
          }
          h1 { color: #333; }
          .info { 
            background-color: #e8f4f8;
            padding: 15px;
            border-radius: 5px;
            margin: 20px 0;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>🐳 Docker 專案運行成功！</h1>
          <p>這是一個簡單的 Docker 化 Node.js 應用程式</p>
          <div class="info">
            <h3>系統資訊：</h3>
            <p><strong>主機名稱：</strong> ${hostname}</p>
            <p><strong>平台：</strong> ${platform}</p>
            <p><strong>版本：</strong> ${release}</p>
            <p><strong>時間：</strong> ${new Date().toLocaleString('zh-TW')}</p>
          </div>
          <p>此應用程式正在 Port 3000 上運行</p>
        </div>
      </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`應用程式正在 http://localhost:${port} 上運行`);
  console.log(`主機名稱: ${hostname}`);
  console.log(`平台: ${platform}`);
});