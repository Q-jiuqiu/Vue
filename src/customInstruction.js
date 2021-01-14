// 全局自定义指令

import Vue from "vue";

Vue.directive("myFocus", {
  inserted(el) {
    el.focus();
  }
});
