# React Mobile Template

GitHub Project Link: [React-Mobile-Template](https://github.com/huangmingfu/react-mobile-template)

This is a **mobile project template** based on [React-Ts-Template](https://github.com/huangmingfu/react-ts-template), aimed at helping you quickly start mobile H5 projects and save a lot of repetitive configuration time. The template integrates various development specifications and popular plugins, ready to use out of the box, allowing you to focus on business logic implementation!

## Features

- **Route Lazy Loading**: Implemented route lazy loading to improve page switching performance and reduce initial loading time. (See `router`)
- **Route Guard**: Flexible route guard management to ensure user access control and enhance application security. (See `router`)
- **Global State Management**: Provides Zustand global state management example code to simplify cross-component state sharing and improve development efficiency. (See `store`)
- **Axios Request Encapsulation**: Encapsulates Axios to uniformly handle HTTP requests and responses, simplifying interaction with backend interfaces. (See `services`)
- **Utility Functions and Hooks**: Provides convenient utility functions and hooks. (See `utils`, `hooks`)
- **react-dev-inspector Integration**: Click page elements to open corresponding code directly in IDE, facilitating developer debugging and improving development efficiency. (See `vite.config.ts`)
- **Automatic Import Sorting**: Integrated with prettier-plugin-sort-imports to automatically beautify import order, improving code readability and maintainability
- **Other Features**: Provides convenient commands for environment-specific running and packaging; configured code splitting strategy; local reverse proxy to solve cross-origin issues; detailed "nanny-level comments", etc.

## Technology Stack

### 🛠 Technology Selection

- **React 18 & React-DOM**: Using the latest React version for high-performance front-end and smoother user experience
- **React-Router**: Latest v7 version, supporting route lazy loading and optimizing page switching performance
- **rem**: Using rem units for mobile adaptation, ensuring consistent display across different devices
- **antd-mobile**: Alibaba's open-source mobile component library, providing rich UI components and simplifying development process
- **SCSS Preprocessor**: Fully adopting new SCSS version, using `@use` instead of `@import` for stronger modularity
- **ahooks**: Provides rich React Hooks similar to VueUse, further simplifying logical code
- **zustand**: Lightweight state management library
- **Immer**: Simplifies immutable data structure operations
- **Lodash-es**: Provides common utility functions. If you prefer modern ES implementation, you can also consider `es-toolkit`.
- **Axios**: HTTP request library
- **classnames**: Dynamic class name management tool
- **Dayjs**: Lightweight date processing library

## Project Standards and Configuration

To ensure code consistency and standardization during team collaboration, the project introduces:

- **Full ESM Standard**: Using modular imports
- **Package Manager**: Strictly using pnpm
- **Style Naming Convention**: BEM naming standard
- **File Naming**: Unified `kebab-case`

### 💡 Efficient Code Standard Management

- **@antfu/eslint-config**: Pre-configured ESLint rules that cover best practices and common error detection, helping developers write high-quality TypeScript and JavaScript code.
- **simple-git-hooks**: Automatically runs code checks and formatting via Git Hooks, ensuring that every commit and push conforms to project standards, reducing code review workload, and improving code consistency.
- **EditorConfig**: Unified editor configuration

## Summary

**React-Mobile-Template** aims to reduce initial configuration steps through preset best practices, allowing developers to quickly start project development. It comes with a mature development toolchain and powerful plugin support to ensure team development consistency and high-quality code.

**👉 Star the project and start your React mobile project journey!**

> [React-Mobile-Template](https://github.com/huangmingfu/react-mobile-template)

## Notes

1. Currently, some UI libraries do not support React 19. This project uses version 18.3.1, so be cautious when upgrading the React version.
2. The `postcss-pxtorem` plugin does not support inline styles, so a `px2rem` function is provided in `utils` to address this. Example: `<div style={{ width: px2rem(100) }}>test</div>`
3. The `postcss-pxtorem` plugin will not convert px to rem in the following scenarios:

(1). When styles are imported in `main.ts`, such as `import '@/styles/scss/global.scss';`. It is recommended to import styles that do not involve px, such as `reset.css`.
