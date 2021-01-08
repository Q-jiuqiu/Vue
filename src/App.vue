<template>
  <div id="app">
    <router-link to="/mySotre">store</router-link>
    <router-link to="/lifecycle">生命周期</router-link>
    <router-link to="/render">render函数</router-link>
    <router-link to="/command">语法模板——指令</router-link>
    <router-link to="/computeAndWatch">计算属性和侦听器</router-link>
    <router-link to="/ifAndKey">条件渲染和key</router-link>
    <router-link to="/key">key</router-link>
    <router-link to="/dataUpdate">数组更新检测</router-link>
    <router-link to="/eventsHandle">事件处理</router-link>
    <router-link to="/componentFoindation">组件基础</router-link>
    <router-link to="/customEvents">自定义事件</router-link>
    <allButton></allButton>
    <router-view />
  </div>
</template>

<script>
// import hello from "./components/HelloWorld";

import "./utils/allRegisterComp";

export default {
  name: "App"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
