<template>
  <div class="syncAttr" @click="change">
    <p>$attrs.a:{{ $attrs.a }}</p>
    <p>$attrs.b:{{ $attrs.b }}</p>
    <p>$attrs.c:{{ $attrs.c }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTitle: 1
    };
  },
  props: ["title"],
  methods: {
    change() {
      this.$emit("update:title", ++this.newTitle);
      this.$emit("update:c", this.$attrs.c + 1);
    }
  },
  created() {
    console.log(this.$attrs);
  },
  updated() {
    console.log(this.obj);
  }
};
</script>

<style></style>
