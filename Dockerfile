# 使用官方Node.js作为基础镜像
FROM node:16-buster-slim

# 设置代理服务器
#ENV HTTP_PROXY http://10.1.8.1:xxx
#ENV HTTPS_PROXY http://10.1.8.1:xxx
#ENV NO_PROXY localhost,127.0.0.1

# Install fontconfig, and fonts
RUN apt-get update && \
    apt-get install -y fontconfig fonts-dejavu fonts-wqy-zenhei && \
    rm -rf /var/lib/apt/lists/*

# 设置工作目录
WORKDIR /app

# 将package.json和package-lock.json复制到工作目录
COPY package*.json ./

# 安装项目依赖
RUN npm install

# 将项目文件复制到工作目录
COPY . .

# 暴露端口3007
EXPOSE 3007

# 清除构建时设置的代理环境变量
# ENV HTTP_PROXY=""
# ENV HTTPS_PROXY=""
# ENV NO_PROXY=""


# 运行服务器
CMD ["node", "server.js"]

