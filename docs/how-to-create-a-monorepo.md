# 如何创建一个 Monorepo 仓库

## 为什么 Monorepo

```html
Monorepos let you develop multiple packages in the same repository, which is
fantastic for productivity. You can share code, establish clear ownership, and
have fast unified CI. That is why more and more teams are switching to this way
of development.
```

## 安装 Lerna

- 全局安装 Lerna

  ```bash
  npm i -g lerna@7
  ```

- 创建项目

  [getting-started](https://lerna.js.org/docs/getting-started)

  ```bash
  npx lerna init --dryRun
  ```

## 基于 pnpm 的 配置

近期项目中 pnpm 用的较为频繁，所以这里使用 pnpm 作为包管理器。

[using-pnpm-with-lerna](https://lerna.js.org/docs/recipes/using-pnpm-with-lerna)

## 创建第一个 Package

```bash
cd ./packages
pnpm vite create [my-first-package]
cd ..
pnpm install
```
