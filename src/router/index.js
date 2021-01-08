/*
 * @Author: your name
 * @Date: 2020-12-21 09:57:41
 * @LastEditTime: 2021-01-06 11:05:11
 * @LastEditors: quling
 * @Description: In User Settings Edit
 * @FilePath: \Vue\src\router\index.js
 */
import Vue from "vue";
import Router from "vue-router";
import myStore from "@/views/store/";
import lifeCycle from "@/views/lifeCycle/lifeCycle";
import render from "@/views/lifeCycle/render";
import command from "@/views/template/command";
import computeAndWatch from "@/views/computeAndWatch/computeAndWatch";
import ifAndKey from "@/views/ifAndKey/ifAndKey";
import key from "@/views/ifAndKey/key";
import dataUpdate from "@/views/ifAndKey/dataUpdate";
import eventsHandle from "@/views/eventsHandle/eventsHandle";
import componentFoindation from "@/views/componentFoindation/componentFoindation";
import customEvents from "@/views/customEvents/customEvents";

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
    },
    {
      path: "/command",
      name: "command",
      component: command
    },
    {
      path: "/computeAndWatch",
      name: "computeAndWatch",
      component: computeAndWatch
    },
    {
      path: "/ifAndKey",
      name: "ifAndKey",
      component: ifAndKey
    },
    {
      path: "/key",
      name: "key",
      component: key
    },
    {
      path: "/dataUpdate",
      name: "dataUpdate",
      component: dataUpdate
    },
    {
      path: "/eventsHandle",
      name: "eventsHandle",
      component: eventsHandle
    },
    {
      path: "/componentFoindation",
      name: "componentFoindation",
      component: componentFoindation
    },
    {
      path: "/customEvents",
      name: "customEvents",
      component: customEvents
    }
  ]
});
