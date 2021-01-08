import Vue from "vue";

const files = require.context("../components", true, /\.vue$/);
// console.log(files);
files.keys().forEach(item => {
  const name = item.replace(/^\.\/(.*\/)?/, "").replace(/\.vue$/, "");
  // console.log(name, files(item));
  Vue.component(name, files(item).default || files(item));
});
