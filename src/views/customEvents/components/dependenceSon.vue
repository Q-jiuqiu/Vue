<template>
  <div class="dependence-son">
    <h1>son</h1>
  </div>
</template>

<script>
export default {
  inject: {
    onClick: {
      from: "onClick",
      default: null
    }
  },
  data() {
    return {
      dependence1: [1, 2],
      dependence2: "11"
    };
  },
  beforeCreate() {
    console.log("==beforeCreate==");
    this.$on("hook:created", function() {
      console.log("===hook:created===");
    });
    this.$on("hook:beforeDestroy", function() {
      console.log("===hook:beforeDestroy===");
    });
  },
  created() {
    // console.log("2:", this.$parent);
    // console.log(this.onClick);
    console.log("==created==");
    this.$on("hook:created", function() {
      console.log("===hook:created===");
    });
    this.$on("hook:beforeDestroy", function() {
      console.log("===hook:beforeDestroy===");
    });
  },
  mounted() {
    console.log("==mounted==");
    this.$on("hook:beforeDestroy", function() {
      console.log("===hook:beforeDestroy===");
    });
  }
};
</script>

<style></style>
