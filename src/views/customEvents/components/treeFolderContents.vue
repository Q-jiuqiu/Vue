<template>
  <ul>
    <li v-for="(child, index) in children" :key="index">
      <treeFolder v-if="child.children" :folder="child"></treeFolder>
      <span>{{ child.name }}</span>
    </li>
  </ul>
</template>

<script>
import treeFolder from "./treeFolder.vue";
export default {
  name: "treeFolderContents",
  components: {
    // treeFolder: () => import("./treeFolder.vue")
  },
  // components: {
  //   treeFolder
  // },
  props: ["children"],
  created() {
    console.log(this.children);
  }
};
</script>

<style></style>
