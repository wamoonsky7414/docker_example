# 簡單 Docker 專案

一個簡單的 Docker 化 Node.js 應用程式，可以在兩台電腦上運行。

## 📁 專案結構

```
simple-docker-project/
├── Dockerfile
├── package.json
├── app.js
├── docker-compose.yml
├── .dockerignore
└── README.md
```

## 🛠️ 在兩台電腦上使用此專案

### 方法一：使用 Docker Hub（推薦）

#### 第一台電腦（建立映像並推送）：

1. **建立專案資料夾並複製檔案：**
   ```bash
   mkdir simple-docker-project
   cd simple-docker-project
   # 複製所有檔案到這個資料夾
   ```

2. **建立 Docker 映像：**
   ```bash
   docker build -t your-username/simple-docker-app .
   ```

3. **測試運行：**
   ```bash
   docker run -p 3000:3000 your-username/simple-docker-app
   ```
   在瀏覽器中訪問 `http://localhost:3000`

4. **推送到 Docker Hub：**
   ```bash
   docker login
   docker push your-username/simple-docker-app
   ```

#### 第二台電腦（下載並運行）：

1. **下載並運行：**
   ```bash
   docker pull your-username/simple-docker-app
   docker run -p 3000:3000 your-username/simple-docker-app
   ```

### 方法二：使用 Docker Compose（更簡單）

#### 第一台電腦：

1. **使用 Docker Compose 啟動：**
   ```bash
   docker-compose up --build
   ```

2. **推送映像：**
   ```bash
   docker tag simple-docker-project_web your-username/simple-docker-app
   docker push your-username/simple-docker-app
   ```

#### 第二台電腦：

1. **修改 docker-compose.yml：**
   ```yaml
   version: '3.8'
   services:
     web:
       image: your-username/simple-docker-app
       ports:
         - "3000:3000"
       container_name: simple-docker-app
       restart: unless-stopped
   ```

2. **啟動：**
   ```bash
   docker-compose up
   ```

### 方法三：直接複製檔案

1. **將整個專案資料夾複製到第二台電腦**
2. **在第二台電腦上運行：**
   ```bash
   docker-compose up --build
   ```

## 🔧 常用命令

```bash
# 建立映像
docker build -t simple-docker-app .

# 運行容器
docker run -p 3000:3000 simple-docker-app

# 使用 Docker Compose
docker-compose up --build

# 停止容器
docker-compose down

# 查看運行中的容器
docker ps

# 查看映像
docker images
```

## 🌐 訪問應用程式

啟動後在瀏覽器中訪問：
- `http://localhost:3000`

應用程式會顯示系統資訊，包括主機名稱，讓你可以確認是在哪台電腦上運行。

## 📝 注意事項

1. 確保兩台電腦都已安裝 Docker 和 Docker Compose
2. 如果使用 Docker Hub，記得替換 `your-username` 為你的 Docker Hub 用戶名
3. 確保防火牆允許 Port 3000 的訪問
4. 可以修改 `app.js` 來自定義應用程式內容

## 🎯 下一步

- 可以修改 `app.js` 來添加更多功能
- 可以添加數據庫服務到 `docker-compose.yml`
- 可以設定自動化部署流程