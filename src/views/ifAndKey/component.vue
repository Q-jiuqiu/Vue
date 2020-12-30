<template>
  <div>
    <input type="text" />
  </div>
</template>

<script>
export default {
  beforeCreate() {
    console.log("===beforeCreate===");
  },
  created() {
    console.log("===created===");
  },
  beforeMount() {
    console.log("===beforeMount===");
  },
  mounted() {
    console.log("===Mounted===");
  },
  beforeUpdate() {
    console.log("===beforeUpdate===");
  },
  updated() {
    console.log("===updated===");
  },
  beforeDestroy() {
    console.log("==beforeDestory==");
  },
  destroyed() {
    console.log("==destoryed==");
  }
};
</script>

<style></style>
