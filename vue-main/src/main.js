import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { registerMicroApps, start, initGlobalState, setDefaultMountApp } from "qiankun";

registerMicroApps([
  {
    name: "react-box", // app name registered
    entry: "//localhost:3000/",
    container: "#container1",
    activeRule: "/react",
  },
  {
    name: "vue-box",
    entry: "//localhost:8081/",
    container: "#container1",
    activeRule: "/vue",
  },
]);


const initialState = Vue.observable({
  user: {
    sex: "男",
    age: 28,
    name: "xiaowang"
  }
})


let action = initGlobalState(initialState);

action.onGlobalStateChange((prev, next) => {
  console.log(prev, next);
});

setDefaultMountApp('/vue')


start();

// action.setGlobalState({
//   sex: "女",
// });

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
