<template>
  <div class="dependence">
    <h1 @click="onClick">依赖注入</h1>
    <dependence-son></dependence-son>
  </div>
</template>

<script>
import dependenceSon from "./dependenceSon.vue";
export default {
  inject: ["onClick"],
  data() {
    return {
      dependenceSon1: [1, 2, 3],
      dependenceSon2: "1122"
    };
  },
  components: { dependenceSon },
  created() {
    // console.log("1:", this.$parent);
    // this.onClick();
  }
};
</script>

<style></style>
