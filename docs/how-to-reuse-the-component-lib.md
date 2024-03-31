# 如何重用一个 组件库仓库

## 为什么

[如何创建一个 react 组件库](./how-to-create-a-component-lib.md) 一文描述了如何创建一个组件库. 但是, 有时候我们并不需要从头开始创建一个组件库, 而是希望重用一个已有的组件库.

## 重用步骤

需改更改的地方:

- `package.json` 中的 `name` 字段
- `package.json` 中的 `version` 字段
- `package.json` 中的 `dependencies` 字段
- `vite.config.ts` 中的 `build` 字段
- `vite.config.ts` 中的 `resolve.alias` 字段
- `vite.config.ts` 中的 `resolve.mainFields` 字段
- `vite.config.ts` 中的 `resolve.extensions` 字段
- `vite.config.ts` 中的 `resolve.modules` 字段
- `vite.config.ts` 中的 `resolve.symlinks` 字段
- `vite.config.ts` 中的 `resolve.dedupe` 字段
- `vite.config.ts` 中的 `build` 字段
