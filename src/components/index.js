import Vue from "vue"
const req = require.context(".", true, /\.vue$/);

req.keys().forEach(fileName => {
  const componentConfig = req(fileName);
  const name =
    fileName.name ||
    fileName.replace(/^\.\/(.*\/)?/, "").replace(/\.vue$/, "");
  /^My/.test(name) &&
    Vue.component(name, componentConfig.default || componentConfig);
});