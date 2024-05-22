const express = require('express');
const { createCanvas, loadImage } = require('canvas');

const app = express();
const port = 3007;

app.use(express.json());

app.get('/generate-logo', async (req, res) => {
    const { porn, hub, fontSize = 100, bgColor = '#000000', rightBgColor = '#FE9A00', leftColor = '#FFFFFF', rightColor = '#000000' } = req.query;

    // 设置文字样式
    const canvas = createCanvas(1, 1); // 先创建一个小画布来测量文字
    const ctx = canvas.getContext('2d');
    ctx.font = `bold ${fontSize}px "WenQuanYi Zen Hei"`;

    // 计算文字宽度
    const leftTextWidth = ctx.measureText(porn).width;
    const rightTextWidth = ctx.measureText(hub).width;
    const textSpacing = 30; // 左右文字之间的固定间隔宽度

    // 计算画布大小
    const totalTextWidth = leftTextWidth + textSpacing + rightTextWidth;
    const canvasWidth = totalTextWidth + 160; // 加上一些边际
    const canvasHeight = fontSize * 2; // 高度基于字体大小
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    // 重新设置背景和字体样式
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
    ctx.font = `bold ${fontSize}px "WenQuanYi Zen Hei"`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    // 计算并绘制左侧文字
    ctx.fillStyle = leftColor;
    const leftTextX = (canvasWidth / 2) - (rightTextWidth / 2) - textSpacing / 2;
    ctx.fillText(porn, leftTextX, canvasHeight / 2);

    // 计算并绘制右侧背景
    ctx.fillStyle = rightBgColor;
    const rightTextX = (canvasWidth / 2) + (leftTextWidth / 2) + textSpacing / 2;
    ctx.fillRect(rightTextX - rightTextWidth / 2 - 10, canvasHeight / 2 - fontSize * 0.6, rightTextWidth + 20, fontSize * 1.2);

    // 绘制右侧文字
    ctx.fillStyle = rightColor;
    ctx.fillText(hub, rightTextX, canvasHeight / 2);

    // 将canvas转换为图片并发送
    const buffer = canvas.toBuffer('image/png');
    res.set('Content-Type', 'image/png');
    res.send(buffer);
});


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});