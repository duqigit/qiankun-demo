import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

let instance = null;

function render() {
  instance = new Vue({
    render: (h) => h(App),
  }).$mount("#app"); // 挂在到自己的html，基座会拿到挂在后的html，自动插到基座中
}

// 如果独立运行，不在乾坤框架中
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

/**
 * 子组件的协议
 */

// props 传参
export async function bootstrap() {}

export async function mount(props) {
  render(props);
}

export async function unmount() {
  // 卸载
  instance.$destroy();
}
