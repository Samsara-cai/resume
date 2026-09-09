# Samasara 个人简历站点

这是一个不需要服务器的纯静态个人简历，入口文件位于 `index.html`。

## 发布到 GitHub Pages

1. 将仓库推送到 GitHub（工作流文件位于 `.github/workflows/deploy-resume.yml`）。
2. 在仓库的 **Settings → Pages → Build and deployment → Source** 中选择 **GitHub Actions**。
3. 推送到 `main` 或 `master` 后，Actions 会自动发布根目录中的静态文件。
4. 仓库中的 `CNAME` 会自动将站点绑定到 `samasara.site`。

## 域名 DNS

在域名服务商处添加：

- `www`：CNAME 指向 `<你的 GitHub 用户名>.github.io`
- 根域名：按 GitHub Pages 当前提示配置 A 记录，或使用服务商的 URL 转发到 `www.samasara.site`

页面中的联系方式目前使用域名入口，部署后可以直接在 `index.html` 的联系区替换为邮箱、GitHub 或微信链接。
