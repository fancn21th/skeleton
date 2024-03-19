# 如何创建一个 react 组件库

## 为什么

有很多 现成的 UI 组件库, 但是 它们 不适合. 且难于定制化.

## 创建步骤

> 首先 我们要理解 实际上 是 vite 里面的 rollup 来打包我们的组件库的. 不同与 Webpack 适合打包应用, rollup 适合打包库.

- 打包配置

  配置 rollup 如何打包我们的组件库

  [vite.config.ts](/packages/skeleton-design-system/vite.config.ts)

- 入口文件

  [package.json](/packages/skeleton-design-system/package.json) 中的 `module` 和 `main` 字段指定了入口文件

  ```json
  {
    "module": "./dist/skeleton-design-system.js",
    "main": "./dist/skeleton-design-system.cjs"
  }
  ```

## 发布步骤

- 修改版本号

  修改 `package.json` 中的 `version` 字段

  - beta 版本

    ```bash
    npm version prerelease
    ```

- 打 Tag

  ```bash
  git tag v0.0.1
  ```

- 推送到远程仓库

  ```bash
  git push
  git push --tags
  ```

- 发布到 npm

  ```bash
  npm run pub
  ```

## 参考

- [Modern Component Library w/ React & Storybook](https://www.youtube.com/watch?v=21iHNxVlfvw)
