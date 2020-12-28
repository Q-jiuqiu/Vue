/*
 * @Author: your name
 * @Date: 2020-12-24 10:45:25
 * @LastEditTime: 2020-12-24 14:07:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Vue\src\store\index.js
 */
import Vue from "vue";
import Vuex from "vuex";
import modules from "./modules";

Vue.use(Vuex);
export default new Vuex.Store({
  modules
});
