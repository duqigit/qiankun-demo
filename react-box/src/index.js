import React from 'react';
import ReactDOM from 'react-dom/client';
import './public-path';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let root

function render() {
  root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}


if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  // 启动微应用
  console.log('react bootstrap')
}
export async function mount() {
  console.log('react mount')
  render()
  // 加载微应用
}
export async function unmount() {
  // 卸载微应用  
  console.log('unmount')
  root.unmount()
  // console.log(root.unmount())
}
export async function update() {
  // 更新微应用
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
