import { Inspector } from 'react-dev-inspector'
import { createRoot } from 'react-dom/client'

import App from './app.tsx'

// 负责更改根font-size，rem适配
import 'amfe-flexible'

// 重置样式
import '@/styles/css/reset.css'

function setupApp() {
  createRoot(document.getElementById('root')!).render(
    <>
      <Inspector keys={['ctrl', 'alt', 'q']} />
      <App />
    </>,
  )
}

setupApp()
