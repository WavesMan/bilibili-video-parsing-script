// ==UserScript==
// @name                B站视频解析脚本
// @namespace           http://tampermonkey.net/
// @version             1.0
// @description         在B站视频页添加解析视频按钮
// @author              Waves_Man
// @author-github       https://github.com/WavesMan
// @author-homepage     http://home.waveyo.cn
// @match               https://www.bilibili.com/video/*
// @icon                https://cloud.waveyo.cn//Services/websites/home/images/icon/favicon.ico
// @original-script     https://scriptcat.org/zh-CN/script-show-page/2682/
// @grant               none
// @license             GPL-2.0 license
// ==/UserScript==

(function() {
    'use strict';

    // 获取视频的BV号
    const bvId = window.location.pathname.split('/')[2];

    // 在脚本开头定义按钮位置参数
    const buttonPositionTop = '820px'; // 可以调整
    const buttonPositionRight = '800px'; // 可以调整

    // 创建按钮
    const button = document.createElement('button');
    button.innerText = '解析视频';
    button.style.position = 'fixed';
    button.style.top = buttonPositionTop; // 使用参数
    button.style.right = buttonPositionRight; // 使用参数
    button.style.zIndex = '9999';
    button.style.padding = '10px 15px';
    button.style.backgroundColor = '#4CAF50';
    button.style.color = '#fff';
    button.style.border = 'none';
    button.style.borderRadius = '5px';
    button.style.cursor = 'pointer';


    // 创建浮动窗口
    const modal = document.createElement('div');
    modal.style.display = 'none'; // 初始隐藏
    modal.style.position = 'fixed';
    modal.style.top = '520px'; // 调整为在按钮下方
    modal.style.right = '550px'; // 与按钮对齐
    modal.style.width = '300px';
    modal.style.padding = '20px';
    modal.style.backgroundColor = '#fff';
    modal.style.boxShadow = '0 0 10px rgba(0,0,0,0.5)';
    modal.style.zIndex = '10000';

    // 创建“开始解析”按钮
    const startButton = document.createElement('button');
    startButton.innerText = '开始解析';
    startButton.style.marginRight = '10px';
    // New style
    startButton.style.border = 'none'; // 去掉边框
    startButton.style.borderRadius = '5px'; // 圆角
    startButton.style.backgroundColor = '#4CAF50'; // 设置背景颜色
    startButton.style.color = '#fff'; // 设置字体颜色
    startButton.style.padding = '10px 15px'; // 增加内边距
    startButton.style.display = 'block'; // 确保它在新的一行
    //
    startButton.onclick = async () => {
        outputArea.innerText = `正在解析 BV号: ${bvId}...`;

        try {
            // 发送请求获取视频数据
            const response = await fetch(`https://api.bilibili.com/x/web-interface/view?bvid=${bvId}`);
            const data = await response.json();

            if (data.code === 0) {
                const cid = data.data.cid; // 提取cid
                // 发送请求获取播放链接
                await fetchPlayUrl(bvId, cid);
            } else {
                outputArea.innerText = '解析失败，无法获取视频信息。';
            }
        } catch (error) {
            outputArea.innerText = '请求失败，请检查网络。';
            console.error('Error fetching video data:', error);
        }
    };

    // 获取播放链接的函数
    async function fetchPlayUrl(bvid, cid) {
        const url = `https://api.bilibili.com/x/player/playurl?bvid=${bvid}&cid=${cid}&qn=64&fnval=1&fnver=0&fourk=0&platform=html5`;
        const headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3',
            'Referer': 'https://www.bilibili.com/'
        };

        try {
            const response = await fetch(url, { headers });
            const data = await response.json();

            if (data.code === 0) {
                const videoUrl = data.data.durl[0].url; // 获取第一个视频链接
                outputArea.innerText = videoUrl; // 仅输出视频链接
            } else {
                outputArea.innerText = '获取播放链接失败。';
            }
        } catch (error) {
            outputArea.innerText = '请求播放链接失败。';
            console.error('Error fetching play URL:', error);
        }
    }

    // 创建输出区域
    const outputArea = document.createElement('div');
    outputArea.style.marginTop = '10px'; // 输出区域与上方元素的间距
    outputArea.style.height = '100px'; // 增加输出区域的高度
    outputArea.style.border = '1px solid #ccc';
    outputArea.style.padding = '5px';
    outputArea.style.overflowY = 'auto';
    outputArea.style.whiteSpace = 'pre-wrap'; // 保持换行

    // 创建“复制URL”按钮
    const copyButton = document.createElement('button');
    copyButton.style.marginTop = '10px'; // 输出区域与上方元素的间距
    copyButton.innerText = '复制URL';
    copyButton.style.padding = '10px 15px'; // 增加内边距
    copyButton.style.backgroundColor = '#4CAF50'; // 设置背景颜色
    copyButton.style.color = '#fff'; // 设置字体颜色
    copyButton.style.border = 'none'; // 去掉边框
    copyButton.style.borderRadius = '5px'; // 圆角
    copyButton.style.cursor = 'pointer'; // 鼠标悬停时变为手型
    copyButton.onclick = () => {
        const videoUrl = outputArea.innerText.trim(); // 获取输出区域的链接
        if (videoUrl) {
            navigator.clipboard.writeText(videoUrl).then(() => {
                outputArea.innerText = '视频链接已复制到剪贴板！';
            }).catch(() => {
                outputArea.innerText = '复制失败，请手动复制。';
            });
        } else {
            outputArea.innerText = '没有视频链接可复制。';
        }
    };


    // 创建关闭按钮
    const closeButton = document.createElement('button');
    closeButton.innerText = '关闭';
    closeButton.style.marginTop = '10px';
    // New style
    closeButton.style.border = 'none'; // 去掉边框
    closeButton.style.borderRadius = '5px'; // 圆角
    closeButton.style.backgroundColor = '#4CAF50'; // 设置背景颜色
    closeButton.style.color = '#fff'; // 设置字体颜色
    closeButton.style.padding = '10px 15px'; // 增加内边距
    closeButton.style.display = 'block'; // 确保它在新的一行
    //
    closeButton.onclick = () => {
        modal.style.display = 'none'; // 隐藏模态窗口
        outputArea.innerText = ''; // 清空输出区域
    };

    // 将按钮和窗口添加到页面
    modal.appendChild(startButton);
    modal.appendChild(outputArea);
    modal.appendChild(copyButton);
    modal.appendChild(closeButton); // 关闭按钮在最后

    document.body.appendChild(button);
    document.body.appendChild(modal);

    // 按钮点击事件
    button.onclick = () => {
        modal.style.display = 'block'; // 显示模态窗口
        outputArea.innerText = ''; // 清空输出区域
    };

    // 添加样式以改善用户体验
    const style = document.createElement('style');
    style.textContent = `
        button {
            transition: background-color 0.3s;
        }
        button:hover {
            background-color: #ff6b81;
        }
        div {
            font-family: Arial, sans-serif;
        }
    `;
    document.head.appendChild(style);

})();
