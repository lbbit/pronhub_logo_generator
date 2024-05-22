# PronHub风格Logo生成器

这个项目是一个Node.js应用程序，可以生成类似于著名网站PronHub的风格的Logo。它允许用户通过URL查询参数自定义Logo的文本和颜色。

## 特点

- 生成PronHub风格的Logo并自定义文本。
- 自定义字体大小和颜色。
- 使用Express和`canvas`库动态创建图像。

## 安装

### 容器运行（推挤）
要运行此项目，您需要在机器上安装Docker。按照以下步骤开始：

1. 克隆此存储库。
   
2. 本地安装Docker和docker-compose环境。

3. 构建并运行Docker容器：
   ```bash
   docker-compose up --build
   ```

这将在本地机器的3007端口上暴露应用程序。

### 直接运行
1. 克隆此存储库。
2. 安装依赖项：`npm install`
3. 启动应用程序：`node server.js`
这将在本地机器的3007端口上暴露应用程序。

## 使用方法

要生成一个Logo，请向服务器发送带有适当查询参数的GET请求。以下是如何操作的示例：

```bash
# 完整参数示例请求
http://localhost:3007/generate-logo?porn=Pron&hub=Hub&fontSize=100&bgColor=%23000000&rightBgColor=%23FE9A00&leftColor=%23FFFFFF&rightColor=%23000000
# 最简单参数示例请求
http://localhost:3007/generate-logo?porn=Porn&hub=Hub
```

### 参数

- `porn`: Logo左侧的文本。
- `hub`: Logo右侧的文本。
- `fontSize`: 文本的字体大小（默认为100）。
- `bgColor`: Logo的背景颜色。
- `rightBgColor`: Logo右侧部分的背景颜色。
- `leftColor`: Logo左侧文本的颜色。
- `rightColor`: Logo右侧文本的颜色。

## 示例

以下是使用此生成器创建的一些Logo示例：

![PronHub 示例](pic/PronHub.png)

> “Pron Hub”默认参数
> 请求url:`http://localhost:3007/generate-logo?porn=Porn&hub=Hub`

![C 语言 示例](pic/C语言.png)

> “C语言”默认参数
> 请求url:`http://localhost:3007/generate-logo?porn=C&hub=语言`

![YouTube 示例](pic/youtube.png)

> “YouTube”修改颜色和字体大小
> 请求url:`http://10.1.2.34:3007/generate-logo?porn=You&hub=Tube&fontSize=150&bgColor=%23FF1500&rightBgColor=%23FFFFFF&leftColor=%23FFFFFF&rightColor=%23FF1500`
