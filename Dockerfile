 # 使用官方的 Node.js 基礎映像
FROM node:18-alpine

# 設定工作目錄
WORKDIR /app

# 複製 package.json 和 package-lock.json
COPY package*.json ./

# 安裝依賴
RUN npm install

# 複製應用程式源碼
COPY . .

# 暴露端口
EXPOSE 3000

# 啟動命令
CMD ["npm", "start"]