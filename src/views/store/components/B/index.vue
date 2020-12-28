<!--
 * @Author: your name
 * @Date: 2020-12-24 10:16:51
 * @LastEditTime: 2020-12-24 14:29:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Vue\src\views\store\components\B\index.vue
-->
<template>
  <div class="store-B">
    <h1>{{ text }}</h1>
  </div>
</template>

<script>
export default {
  name: "B",
  data() {
    return {
      text: this.$store.getters.department || "hello"
    };
  }
};
</script>

<style></style>
