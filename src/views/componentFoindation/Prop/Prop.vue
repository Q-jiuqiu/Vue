<template>
  <div class="Prop">
    This is Prop.
    <div>
      {{ this.compA }}
    </div>
  </div>
</template>

<script>
export default {
  // props: ["compA"]
  props: {
    compA: {
      // type: Number,
      // default:
      validator: value => {
        if (typeof value === "number") {
          return true;
        } else {
          return false;
        }
      }
    }
  },
  inheritAttrs: false // 组件里就没有父组件内的color属性
};
</script>

<style></style>
