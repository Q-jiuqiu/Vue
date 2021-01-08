/*
 * @Author: your name
 * @Date: 2020-12-21 09:57:41
 * @LastEditTime: 2021-01-08 16:56:13
 * @LastEditors: quling
 * @Description: In User Settings Edit
 * @FilePath: \Vue\src\main.js
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import store from "./store";
import hello from "./components/HelloWorld.vue";
import TreeFolder from "./views/customEvents/components/treeFolder.vue";

Vue.config.productionTip = false;

// 注册全局自定义组件
Vue.component("allButton", {
  data() {
    return { count: 0 };
  },
  template: '<button @click="count++">{{count}}</button>'
});
Vue.component("hello", hello);

Vue.component("TreeFolder", TreeFolder);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  components: { App },
  template: "<App/>"
});
