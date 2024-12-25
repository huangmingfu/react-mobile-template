import { Root, createRoot } from 'react-dom/client';

import { SpinLoading } from 'antd-mobile';

import { createDesign } from '@/hooks';

import './index.scss';

let container: HTMLDivElement | null = null;
let root: Root | null = null;

const { prefixCls } = createDesign('pub-loading');

function Loading() {
  return (
    <div className={prefixCls}>
      <SpinLoading style={{ '--size': '42px' }} />
    </div>
  );
}

Loading.show = () => {
  if (container || root) return;
  container = document.createElement('div');
  container.setAttribute('id', 'pub-loading');
  root = createRoot(container);
  root.render(<Loading />);
  document.body.appendChild(container);
};

Loading.hide = () => {
  if (container && root) {
    root.unmount();
    document.body.removeChild(container);
    container = root = null;
  }
};

export default Loading;
