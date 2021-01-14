<!--
 * @Author: your name
 * @Date: 2020-12-24 10:16:51
 * @LastEditTime: 2021-01-14 11:30:27
 * @LastEditors: quling
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
      text: this.$store.department || "hello"
    };
  }
};
</script>

<style></style>
