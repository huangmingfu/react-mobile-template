**中文** | [English](./README.en-US.md)

GitHub 项目地址：[React-Mobile-Template](https://github.com/huangmingfu/react-mobile-template)

这是一个基于 [React-Ts-Template](https://github.com/huangmingfu/react-ts-template) 打造的**移动端项目模板**，旨在帮助你极速启动移动端h5项目，节省大量重复的配置时间。同时，模板集成了各种开发规范和流行插件，开箱即用，让你专注于业务逻辑的实现！

## 功能配备

- **路由懒加载**：封装实现了路由懒加载，提升页面切换性能，减少初始加载时间。（详见`router`）
- **路由守卫**：封装了灵活的路由守卫管理，确保用户访问权限控制，增强应用的安全性。（详见`router`）
- **全局状态管理**：提供了 Zustand 全局状态管理示例代码，简化跨组件状态共享，提升开发效率。（详见`store`）
- **Axios 请求封装**：对 Axios 进行封装，统一处理 HTTP 请求和响应，简化与后端接口的交互流程。（详见`services`）
- **工具函数、hooks**：提供了一些方便实用的工具函数和hooks。（详见`utils`、`hooks`）
- **react-dev-inspector集成**：点击页面元素，IDE直接打开对应代码插件，方便开发者调试代码，提高开发效率。(详见`vite.config.ts`)
- **import顺序自动美化排序**：集成了 prettier-plugin-sort-imports 插件，可以自动美化 import 顺序，提高代码的可读性和可维护性。
- **其他**：提供一些方便根据环境运行、打包的命令；配置了分包策略；本地反向代理解决跨域；还有详细的`保姆级注释`等等。

## 技术栈一览

### 🛠 技术栈选型

- **React 18 & React-DOM**：使用最新版 React 实现前端高性能和更流畅的用户体验。
- **React-Router**：最新v7版本，支持路由懒加载，优化页面切换性能。
- **rem**：使用 rem 单位进行移动端适配，确保在不同设备上有一致的显示效果（本项目也配置了vw参考可供开发者自行选择使用）。
- **antd-mobile**：阿里巴巴开源的移动端组件库，提供丰富的 UI 组件，简化开发流程。
- **SCSS 预编译**：全面采用新版 SCSS，使用 `@use` 替代 `@import`，模块化更强。
- **ahooks**：提供丰富的 React Hooks 类似 VueUse，进一步简化逻辑代码。
- **zustand**：轻量级的状态管理库。通过对比 Redux、Dva、React-Toolkit、MobX，以及 `useContext` 结合 `useReducer` 的管理方式，最终选择了更简单的 Zustand。
- **Immer**：简化不可变数据结构操作，尤其在多层次嵌套对象中处理更方便。
- **Lodash-es**：提供常用工具函数。若更偏向现代 ES 实现，也可以考虑 `es-toolkit`。
- **Axios**：封装 HTTP 请求库，更方便与后端接口对接。
- **classnames**：动态类名管理工具，特别适合条件渲染样式。
- **Dayjs**：轻量级的日期处理库，提供类似 Moment.js 的 API，但体积更小，性能更好。

### 🔧 其他推荐工具

- **Alova.js**：新一代请求工具，便于请求数据管理。
- **SWR**：数据请求缓存和同步管理的另一选择。

## 项目规范与配置

为确保团队合作时的代码一致性和规范性，**React-Mobile-Template** 引入了一整套项目规范：

- **全面使用 ESM 规范**：采用模块化导入，符合现代 JavaScript 的发展趋势。
- **包管理器强制使用 pnpm**：提高依赖安装速度，减少磁盘空间占用，解决幽灵依赖问题。
- **样式 BEM 命名规范**：结构清晰，减少样式冲突，提升代码可维护性（为了方便样式穿透，并没有采用CSS Modules，需要的也可以自行使用xxx.module.scss）。
- **文件与文件夹命名**：统一使用 `kebab-case`，这种最可靠，尤其是在版本控制共享代码时，不同操作系统对大小写的敏感性不同。

### 💡 高效的代码规范管理

除了代码结构的规范化，项目还集成了极简代码质量检查工具，确保开发体验与代码质量：

- **@antfu/eslint-config**：预配置了 ESLint 规则，涵盖了最佳实践和常见错误检测，帮助开发者编写高质量的代码。
- **simple-git-hooks**：通过 Git Hooks 自动执行代码检查和格式化，确保每次提交和推送的代码都符合项目规范，减少代码审查的工作量并提高代码一致性。
- **EditorConfig**：编辑器的统一配置，减少因编辑器差异产生的问题。

## 其他

### 📦 关于路由缓存 keep-alive

> React 官方暂时没有实现 vue \<keep-alive\> 类似的功能。React 官方出于两点考虑拒绝添加这个功能，具体可以自行搜索查阅。为了达到状态保存的效果，官方推荐以下两种手动保存状态的方式：

- 将需要保存状态组件的 state 提升至父组件中保存。
- 使用 CSS visible 属性来控制需要保存状态组件的渲染，而不是使用 if/else，以避免 React 将其卸载。

> 不过也有一些相关库实现了这个功能，如：react-router-cache-route、react-activation、keepalive-for-react等等，如果项目中需要状态缓存处理的数据量较小，那最好还是按照 React 官方的建议，手动解决状态缓存问题。

---

## 总结

**React-Mobile-Template** 项目模板的目标是通过预设的最佳实践配置，减少开发者在项目初始化时的琐碎配置步骤，让你可以更快上手项目开发。同时，配备了成熟的开发工具链和强大的插件支持，以确保团队开发的一致性和代码的高质量。如果你正在寻找一款高效的 `React 移动端项目模板`，不妨试试 **React-Mobile-Template**！

**👉 赶快 Star 项目，开启你的 React 移动端项目之旅！**

> [React-Mobile-Template](https://github.com/huangmingfu/react-mobile-template)

## 注意

1. 目前有一些ui库还未支持React19，本项目使用的是18.3.1版本，谨慎升级react版本。
2. postcss-pxtorem插件不支持内联样式，所以 `utils` 里面配备了 `px2rem` 函数解决。示例：`<div style={{ width: px2rem(100) }}>test</div>`
3. 以下场景pxtorem插件不会转换rem：
   (1).在main.ts里引入样式，如 `import '@/styles/scss/global.scss';`，建议引入不涉及px的样式，如reset.css。
