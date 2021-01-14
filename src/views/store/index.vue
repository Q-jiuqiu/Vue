<!--
 * @Author: your name
 * @Date: 2020-12-24 10:15:36
 * @LastEditTime: 2021-01-14 13:41:00
 * @LastEditors: quling
 * @Description: In User Settings Edit
 * @FilePath: \Vue\src\views\store\index.vue
-->

<template>
  <dir class="store">
    <div class="address">
      <span>简单的状态管理: {{ address }}</span>
      <input type="text" v-model="value" placeholder="输入地址" />
      <button @click="change">确定</button>
    </div>
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
    return {
      param1: "jhh",
      param2: "123",
      address: this.$root.address,
      value: ""
    };
  },
  components: {
    myA,
    myB
  },
  methods: {
    change() {
      console.log("==change==");
      this.$root.address = this.value;
      this.address = this.value;
      console.log(this);
    }
  }
};
</script>

<style></style>
