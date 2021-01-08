<template>
  <p>
    <span>{{ folder.name }}</span>
    <tree-folder-contents :children="folder.children"></tree-folder-contents>
  </p>
</template>

<script>
import treeFolderContents from "./treeFolderContents.vue";
export default {
  name: "treeFolder",
  components: { treeFolderContents },
  props: ["folder"],
  created() {
    console.log(this.folder);
  }
};
</script>

<style></style>
