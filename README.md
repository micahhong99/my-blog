# 我的博客项目

技术栈 vite pnpm react antdesign ts

## 项目部署

你的站点已上线：[my-blog](https://micahhong99.github.io/my-blog/)

### 部署到 GitHub Pages
使用以下命令进行部署：
```sh
pnpm run deploy
```

---

## 目录结构
```
src/
├── assets/              # 存放图片、字体等静态资源
├── components/          # 共享组件（如导航栏、Footer 等）
├── pages/               # 页面组件
├── hooks/               # 自定义 Hook（如主题切换、数据获取等）
├── utils/               # 工具函数
├── styles/              # 全局样式文件
├── App.tsx              # 根组件
└── main.tsx             # 入口文件
```

---

## TODO 计划

- [ ] **国际化支持**（i18n）
- [ ] **主题化**（暗黑模式切换）
- [ ] **优化 Markdown 渲染**（支持代码高亮、目录导航）
- [ ] **SEO 优化**（添加 meta 标签、站点地图）
- [ ] **PWA 支持**（使博客可离线访问）
- [ ] **文章分类与标签管理**


构建优化
(!) Some chunks are larger than 500 kB after minification. Consider:
- Using dynamic import() to code-split the application
- Use build.rollupOptions.output.manualChunks to improve chunking: https://rollupjs.org/configuration-options/#output-manualchunks
- Adjust chunk size limit for this warning via build.chunkSizeWarningLimit.

---

持续优化，欢迎贡献 🚀
