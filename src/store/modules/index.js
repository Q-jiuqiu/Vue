/*
 * @Author: your name
 * @Date: 2020-12-24 10:45:25
 * @LastEditTime: 2020-12-24 14:26:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Vue\src\store\index.js
 */
const files = require.context(".", true, /\.js$/);
const modules = {};

files.keys().forEach(key => {
  if (key === "./index.js") {
    return;
  }
  let moduleName = key.split("/")[1].split(".")[0];
  modules[moduleName] = files(key).default;
});
// console.log(modules);
export default modules;
