<template>
  <div id="app">
    <div class="left">
      <ul>
        <li>
          <router-link to="/myStore">store</router-link>
        </li>
        <li>
          <router-link to="/lifecycle">生命周期</router-link>
        </li>
        <li>
          <router-link to="/render">render函数</router-link>
        </li>
        <li>
          <router-link to="/command">语法模板——指令</router-link>
        </li>
        <li>
          <router-link to="/computeAndWatch">计算属性和侦听器</router-link>
        </li>
        <li>
          <router-link to="/ifAndKey">条件渲染和key</router-link>
        </li>
        <li>
          <router-link to="/key">key</router-link>
        </li>
        <li>
          <router-link to="/dataUpdate">数组更新检测</router-link>
        </li>
        <li>
          <router-link to="/eventsHandle">事件处理</router-link>
        </li>
        <li>
          <router-link to="/componentFoindation">组件基础</router-link>
        </li>
        <li>
          <router-link to="/customEvents">自定义事件</router-link>
        </li>
        <li>
          <router-link to="/combination">可复用性&组合</router-link>
        </li>
      </ul>
      <allButton></allButton>

      {{ address }}
    </div>

    <div class="right">
      <router-view />
    </div>
  </div>
</template>

<script>
// import hello from "./components/HelloWorld";

import "./utils/allRegisterComp";

export default {
  name: "App",
  data() {
    return {
      address: this.$root.address
    };
  }
};
</script>

<style lang="scss" scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  .left {
    ul > li {
      list-style: none;
    }
  }
  .right {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
  }
}
</style>
