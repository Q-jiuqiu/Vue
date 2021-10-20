<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>-->
  <!-- <div>
    <router-view />
  </div>-->

  <div>
    <ifAndShow />
    <props :minLength="2" />
    <myslot>你好</myslot>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import ifAndShow from "@/UnitTest/ifAndShow/ifAndShow.vue";
import props from "@/UnitTest/props/props.vue";
import myslot from "@/UnitTest/slot/slot.vue";
export default {
  name: "App",
  components: {
    ifAndShow,
    props,
    myslot
    // HelloWorld
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
