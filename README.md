# [management-system](https://github.com/rocketsbigfan/management-system)

🚀🚀🚀 基于 vite2.0 的 react 企业级中后台项目模板 [![license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://github.com/rocketsbigfan/management-system/blob/master/LICENSE)

[![vite](https://img.shields.io/badge/vite-2.4.2-green)](https://github.com/vitejs/vite) [![react](https://img.shields.io/badge/react-17.0.2-green)](https://github.com/facebook/react) [![react-router](https://img.shields.io/badge/react--router-5.2.0-green)](https://github.com/ReactTraining/react-router) [![axios](https://img.shields.io/badge/axios-0.21.1-green)](https://github.com/axios/axios) [![ant-design](https://img.shields.io/badge/ant--design-4.16.7-green.svg)](https://ant.design/index-cn) [![react-activation](https://img.shields.io/badge/react--activation-0.9.4-green.svg)](https://github.com/CJY0208/react-activation/blob/master/README_CN.md)

## 说明

该项目是 React 的中后台项目模板，可方便快速的用于具体项目开发。项目使用 vite2.0 作为开发工具，使用 React+Hooks+React-Router+TypeScript+React-Activation，以 ESLint 作为开发规范。

## 技术栈

- vite@2.0 作为前端构建工具
- React@17.0.2，采用 hooks 来开发组件
- React-router@5.2.0 来配置路由功能
- 采用 Ant-Design@4.16.7 作为 UI 组件
- 使用 React-Activation@0.9.4 实现了页面 keep alive 功能
- 项目采用@umijs/fabric 来规范代码

## CLI 构建命令

### 目录结构

```text
├── dist                    // 打包输出目录
├── public                  // 项目公开目录
├── src                     // src开发目录
│   ├── assets              // 静态资源
│   ├── components          // 公共组件
│   ├── layout              // 页面布局组件
│   ├── hooks               // 公共hooks
│   ├── pages               // 具体业务页面
│   ├── routers             // 项目路由配置
│   ├── styles              // 存放公共样式
│   ├── utils               // 工具库/通用函数
│   ├── typeings.d.ts       // 声明文件
│   └── main.ts             // 项目入口文件
├── index.html              // 入口html页面
├── .editorconfig           // 项目格式配置
├── .tsconfig.json          // ts配置
├── .eslintrc.js            // ESLint配置
├── .prettierrc.js          // prettierrc配置
├── .stylelintrc.js         // style配置
├── .gitignore              // git 忽略配置
├── package.json            // 依赖包配置
├── vite.config.ts          // vite配置文件
└── README.md               // 项目说明
```

### 克隆项目

```bash
git clone https://github.com/rocketsbigfan/management-system.git
```

### 初始化依赖配置

```bash
yarn
```

### 开发环境 启动运行

```bash
yarn dev
```

### 生产环境 打包构建

```bash
yarn build
```
