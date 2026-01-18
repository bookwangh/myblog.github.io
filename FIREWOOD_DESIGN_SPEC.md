# 烽火网站设计规范 - 完整复刻

## 1. 核心技术栈

- **前端框架**: Astro
- **样式方式**: 原生 CSS + CSS 变量
- **字体系统**: Google Fonts (Noto Sans SC, Noto Serif SC)
- **动画**: 原生 CSS transitions

## 2. 布局系统

### 2.1 页面宽度
```css
--page-width: 1100px;
--side-width: 340px;
--post-list-width: 840px;
```

### 2.2 布局结构
- **桌面端**: 三栏布局
  - 左侧空白/导航
  - 中间内容区 (840px)
  - 右侧边栏 (340px)
- **平板端**: 两栏布局 (隐藏左侧空白)
- **移动端**: 单栏布局

## 3. 字体系统

### 3.1 字体家族
```css
font-family: "Noto Sans SC", -apple-system, BlinkMacSystemFont, "Helvetica Neue", "Segoe UI", Arial, sans-serif;
```

### 3.2 字体加载
```html
<link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;500;600;700&family=Noto+Serif+SC:wght@400;500;600&display=swap">
```

### 3.3 字重使用
- **Regular**: 400 - 正文、普通文本
- **Medium**: 500 - 副标题、重要文本
- **Semibold**: 600 - 标题、强调文本
- **Bold**: 700 - 主标题、重要标题

## 4. 颜色系统

### 4.1 主色调
```css
:root {
  /* 背景色 */
  --bg-primary: #FFFFFF;
  --bg-secondary: #F9F9F9;
  --bg-tertiary: #F4F4F4;

  /* 文字颜色 */
  --text-primary: #000000;
  --text-secondary: #666666;
  --text-tertiary: #999999;

  /* 强调色 */
  --accent-red: #E63946;
  --accent-red-hover: #D62D3B;

  /* 边框颜色 */
  --border-light: #E5E5E5;
  --border-medium: #D1D1D1;
  --border-dark: #CCCCCC;

  /* 阴影 */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 2px 4px rgba(0, 0, 0, 0.08);
  --shadow-lg: 0 4px 8px rgba(0, 0, 0, 0.12);

  /* 间距 */
  --spacing-xs: 0.25rem;  /* 4px */
  --spacing-sm: 0.5rem;   /* 8px */
  --spacing-md: 1rem;     /* 16px */
  --spacing-lg: 1.5rem;   /* 24px */
  --spacing-xl: 2rem;     /* 32px */
  --spacing-2xl: 3rem;   /* 48px */

  /* 圆角 */
  --radius-sm: 4px;
  --radius-md: 6px;
  --radius-lg: 8px;
  --radius-xl: 12px;
}
```

### 4.2 暗色模式
```css
:root.dark-mode {
  --bg-primary: #1A1A1A;
  --bg-secondary: #222222;
  --bg-tertiary: #2A2A2A;

  --text-primary: #FFFFFF;
  --text-secondary: #AAAAAA;
  --text-tertiary: #888888;

  --border-light: #333333;
  --border-medium: #444444;
  --border-dark: #555555;
}
```

## 5. 组件规范

### 5.1 顶部导航栏

#### 布局
```css
.list-intro {
  position: absolute;
  left: 0;
  right: 0;
  height: 48px;
  padding: 0 1rem;
  z-index: 2;
  display: flex;
  width: 100%;
}

.list-intro.fixed {
  position: fixed;
  z-index: 10;
  border-bottom: none;
  animation: slide-down 0.3s ease-in-out;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  background: linear-gradient(180deg, rgba(255, 255, 255, .8) 0%, rgba(244, 244, 244, .6) 100%);
  box-shadow: 0 0 1px rgba(0, 0, 0, .3);
}
```

#### Logo
```css
.logo {
  width: 28px;
  height: 28px;
  border-radius: 4px;
  margin-right: 0.5rem;
}
```

#### 导航项
```css
.nav .nav-label {
  padding: 1px;
  color: var(--text-primary);
  transition: all .2s ease-in-out;
  border-radius: 6px;
  height: 32px;
}

.nav:hover .nav-label {
  background-color: rgba(0, 0, 0, 0.05);
}

.nav.selected .nav-label {
  color: var(--accent-red) !important;
}
```

### 5.2 标签页

#### 样式
```css
.post-tabs-wrapper {
  width: 100%;
  display: flex;
  border-bottom: 0.5px solid var(--border-light);
}

.q-tabs {
  box-shadow: none !important;
}
```

### 5.3 文章列表

#### 容器
```css
.post-list-wrapper {
  flex: 1;
  border-right: 0.5px solid var(--border-light);
  padding-right: 1.25rem;
  margin-right: 1.25rem;
}

.post-list {
  max-width: var(--post-list-width);
  margin: 0 auto;
}
```

### 5.4 搜索对话框

#### 布局
```css
.search-dialog {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.95);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 120px;
}
```

## 6. 交互规范

### 6.1 滚动效果
- 滚动超过 350px 时，顶部导航栏变为固定
- 添加 backdrop-filter: blur(10px) 模糊效果
- 添加 slide-down 动画 (0.3s ease-in-out)

### 6.2 按钮交互
```css
button, .nav-label {
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  -webkit-tap-highlight-color: transparent;
}
```

### 6.3 链接交互
```css
a {
  text-decoration: none;
  transition: color 0.2s ease;
}

a:hover {
  /* 根据上下文改变颜色 */
}
```

## 7. 响应式断点

```css
@media screen and (max-width: 1100px) {
  .columns-container {
    flex-direction: column;
    padding-left: 1rem;
    padding-right: 1rem;
  }
}

@media only screen and (max-width: 768px) {
  .list-intro .join-member-button span {
    display: none;
  }

  .list-intro .inner-left > .nav-label h1 {
    max-width: 180px;
  }

  .list-intro .nav {
    padding-left: 0rem;
  }
}
```

## 8. 动画规范

### 8.1 滑入动画
```css
@keyframes slide-down {
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
```

### 8.2 过渡效果
```css
/* 快速过渡 */
transition: all 0.2s ease-in-out;

/* 标准过渡 */
transition: all 0.3s ease;

/* 缓慢过渡 */
transition: all 0.5s ease;
```

## 9. 可访问性

### 9.1 触摸反馈
```css
* {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
}
```

### 9.2 ARIA 标签
- 所有交互元素必须包含 `aria-label`
- 按钮需要明确的描述

### 9.3 键盘导航
- Tab 键可以访问所有可交互元素
- Enter/Space 键触发按钮和链接

## 10. 性能优化

### 10.1 字体加载
```html
<link rel="preload" as="style" href="...">
<link media="print" onload="this.media='all'" rel="stylesheet" href="...">
```

### 10.2 图片优化
- 使用 WebP 格式
- 响应式图片
- 懒加载

### 10.3 CSS 优化
- 使用 CSS 变量减少重复
- 避免使用 `!important`
- 使用 transform 而非 top/left 动画

## 11. 文件结构

```
src/
├── components/
│   ├── FirewoodHeader.astro       # 顶部导航栏
│   ├── FirewoodNav.astro          # 导航组件
│   ├── PostTabs.astro             # 标签页切换
│   ├── PostCard.astro            # 文章卡片
│   ├── PostList.astro            # 文章列表
│   ├── SearchDialog.astro        # 搜索对话框
│   ├── Sidebar.astro             # 侧边栏
│   ├── SubscribeForm.astro       # 订阅表单
│   └── Pagination.astro          # 分页组件
├── styles/
│   ├── global.css               # 全局样式
│   ├── variables.css            # CSS 变量
│   ├── typography.css           # 字体系统
│   ├── layout.css              # 布局样式
│   ├── components.css          # 组件样式
│   └── animations.css         # 动画效果
├── layouts/
│   └── FirewoodLayout.astro     # 主布局
└── pages/
    ├── index.astro               # 首页
    ├── blog/
    │   └── index.astro          # 文章列表页
    └── blog/
        └── [slug].astro         # 文章详情页
```

## 12. 实现优先级

### Phase 1: 核心框架 (高优先级)
1. 设计系统建立 (颜色、字体、间距)
2. 页面布局结构
3. 顶部导航栏
4. 标签页切换

### Phase 2: 内容展示 (高优先级)
5. 文章列表和卡片
6. 文章详情页
7. 分页功能

### Phase 3: 交互功能 (中优先级)
8. 搜索功能
9. 订阅表单
10. 侧边栏内容

### Phase 4: 优化完善 (中低优先级)
11. 响应式设计
12. 暗色模式
13. 动画效果
14. 性能优化

## 13. 关键特性复刻清单

- [x] 固定顶部导航栏（滚动后）
- [x] 标签页切换（最新/最热）
- [x] 搜索对话框
- [x] 文章卡片布局
- [x] 三栏/两栏布局
- [x] 订阅表单
- [x] 分页功能
- [ ] 移动端适配
- [ ] 暗色模式
- [ ] 动画效果
- [ ] 性能优化
