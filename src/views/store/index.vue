<!--
 * @Author: your name
 * @Date: 2020-12-24 10:15:36
 * @LastEditTime: 2020-12-24 10:27:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Vue\src\views\store\index.vue
-->

<template>
  <dir class="store">
    <my-A></my-A>
    <my-B></my-B>
  </dir>
</template>

<script>
import myA from "./components/A";
import myB from "./components/B";
export default {
  name: "Store",
  data() {
    return { param1: "jhh", param2: "123" };
  },
  components: {
    myA,
    myB
  }
};
</script>

<style></style>
