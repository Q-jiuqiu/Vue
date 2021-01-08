<template>
  <!-- <input
    type="text"
    :value="value"
    v-on="$listeners"
    @input="updateVal($event.target.value)"
  /> -->
  <input type="text" :value="value" v-on="$listeners" />
</template>

<script>
export default {
  props: ["value"],
  created() {
    console.log(this.$attrs, this.$listeners);
  },
  methods: {
    updateVal(value) {
      this.$emit("input", value);
    }
  }
};
</script>

<style></style>
