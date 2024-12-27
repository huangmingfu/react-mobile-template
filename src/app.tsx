import { Loading } from '@/components'

import { useLoadingStore } from '@/store'

import { RouterProvider } from 'react-router/dom'

import router from './router'

function App() {
  const { isLoading } = useLoadingStore()
  return (
    <>
      <RouterProvider router={router} />
      {isLoading && <Loading />}
      {/* ...其他需要全局管理的，如Modal弹窗等 */}
    </>
  )
}

export default App