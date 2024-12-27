import type { FC, ReactNode } from 'react'
import { Loading } from '@/components'

import { Suspense } from 'react'

/**
 * 组件懒加载，结合Suspense实现
 * @param Component 组件对象
 * @returns 返回新组件
 */
export function LazyLoad(Component: FC): ReactNode {
  return (
    <Suspense fallback={<Loading />}>
      <Component />
    </Suspense>
  )
}
