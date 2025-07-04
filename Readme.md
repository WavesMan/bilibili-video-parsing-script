# B站视频解析

## 简介

B站视频解析脚本是一个用于在B站视频页面上添加视频解析功能的用户脚本。该脚本允许用户一键获取视频的播放链接，并提供复制链接的功能，方便用户下载或分享视频。

## 功能

- **解析视频**：在B站视频页面添加一个按钮，点击后可以解析当前视频的播放链接。
- **复制链接**：提供一个按钮，允许用户将解析得到的链接复制到剪贴板。
- **用户友好的界面**：使用浮动窗口显示解析结果和操作按钮，简洁易用。
- **响应式布局**：自动适应不同屏幕尺寸，在移动设备上也能良好显示。
- **交互优化**：主按钮可切换显示/隐藏浮动窗口，操作更直观。
- **动画效果**：按钮悬停时有缩放效果，提升用户体验。

## 安装指南

### 使用Script Cat（支持一键安装）

1. **安装Script Cat**：
   - 在浏览器中安装Script Cat扩展。
   - [Script Cat官网](https://scriptcat.org/zh-CN/)

2. **添加脚本**：
   - 访问脚本[下载页](https://scriptcat.org/zh-CN/script-show-page/2682)。
   - 点击“安装脚本”。
   - 按提示操作安装。

3. **访问B站**：
   - 打开任意B站视频页面，您将在三连菜单栏右侧看到“解析视频”按钮。

## 使用方法

1. 点击“解析视频”按钮，脚本将开始解析视频的播放链接。
2. 解析完成后，链接会显示在浮动窗口中。
3. 点击“复制URL”按钮，将链接复制到剪贴板。
4. 点击“关闭”按钮，关闭浮动窗口。

### 使用Tampermonkey

1. **安装Tampermonkey**：
   - 在浏览器中安装Tampermonkey扩展。
   - [Tampermonkey官网](https://www.tampermonkey.net/)

2. **添加脚本**：
   - 打开Tampermonkey面板，选择"创建新脚本"。
   - 将脚本代码粘贴到编辑器中。
   - 保存脚本。

3. **支持说明**：
   - 本脚本已适配Tampermonkey最新版本
   - 支持Chrome、Firefox、Edge等主流浏览器

4. **访问B站**：
   - 打开任意B站视频页面，您将在三连菜单栏右侧看到"解析视频"按钮。

## 使用方法

1. 点击“解析视频”按钮，脚本将开始解析视频的播放链接。
2. 解析完成后，链接会显示在浮动窗口中。
3. 点击“复制URL”按钮，将链接复制到剪贴板。
4. 点击“关闭”按钮，关闭浮动窗口。

## 注意事项

- 请确保您的网络连接正常，以便脚本能够成功请求视频数据。
- 本脚本仅用于个人学习和研究目的，请遵守B站的相关使用条款。
- **浏览器兼容性**：支持Chrome 90+、Firefox 85+、Edge 90+等现代浏览器
- **API访问**：脚本需要访问B站API获取视频信息，请确保相关域名未被屏蔽

## 更新日志

### v1.5 (最新版本)
- **UI交互优化**：主按钮现在可以切换显示/隐藏浮动窗口
- **响应式布局**：自动适应不同屏幕尺寸，优化移动端体验
- **动画效果**：添加按钮悬停缩放效果，提升交互体验
- **代码优化**：简化事件处理逻辑，减少DOM操作

### 历史版本
- v1.0: 初始版本发布

## 开发者信息

- **作者**: Waves_Man
- **GitHub**: [Waves_Man](https://github.com/WavesMan)
- **个人主页**: [home.waveyo.cn](https://home.waveyo.cn)

## 许可证

本脚本遵循 [GPL-2.0 许可证](LICENSE)。