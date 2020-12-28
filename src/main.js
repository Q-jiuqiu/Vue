/*
 * @Author: your name
 * @Date: 2020-12-21 09:57:41
 * @LastEditTime: 2020-12-28 10:16:26
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

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  components: { App },
  template: "<App/>"
});
