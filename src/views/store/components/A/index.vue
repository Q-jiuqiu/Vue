<!--
 * @Author: your name
 * @Date: 2020-12-24 10:16:40
 * @LastEditTime: 2020-12-24 14:40:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Vue\src\views\store\components\A\index.vue
-->
<template>
  <div class="store-A">
    <h1>{{ this.$store.getters.department }}</h1>
    <button type="button" @click="changeMutations">change-mutations</button>
    <button type="button" @click="changeActions">change-actions</button>
  </div>
</template>

<script>
export default {
  name: "A",
  data() {
    return {
      text: this.$store.getters.department || "hello"
    };
  },
  created() {
    console.log("A:this.$root", this.$root);
    console.log("A:this.$store", this.$store.getters);
  },
  methods: {
    changeMutations() {
      alert("mutations");
      this.$store.commit("SET_DEPARTMENT", "哈哈哈");
      console.log(this.$store.getters.department);
    },
    changeActions() {
      alert("actions");
      this.$store.dispatch("SET_DEPARTMENT", "嘻嘻嘻");
      console.log(this.$store.getters.department);
    }
  }
};
</script>

<style></style>
