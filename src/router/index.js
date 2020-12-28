/*
 * @Author: your name
 * @Date: 2020-12-21 09:57:41
 * @LastEditTime: 2020-12-28 14:50:49
 * @LastEditors: quling
 * @Description: In User Settings Edit
 * @FilePath: \Vue\src\router\index.js
 */
import Vue from "vue";
import Router from "vue-router";
import myStore from "@/views/store/";
import lifeCycle from "@/views/lifeCycle/lifeCycle";
import render from "@/views/lifeCycle/render";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/myStore",
      name: "myStore",
      component: myStore
    },
    {
      path: "/lifecycle",
      name: "lifeCycle",
      component: lifeCycle
    },
    {
      path: "/render",
      name: "render",
      component: render
    }
  ]
});
