<template>
  <div class="transition">
    <transition name="fade">
      <keep-alive>
        <!-- <div v-if="isShow" key="title1" style="color:red">Title--1</div>
      <div v-else key="title2" style="color:green">Title--2</div> -->
        <!-- <input type="text" /> -->
        <component :is="component" />
      </keep-alive>
    </transition>
    <button @click="comp = comp === 'Header' ? 'Body' : 'Header'">
      change
    </button>
    {{ comp }}
  </div>
</template>

<script>
import getCompByName from "../utils/autoRegister";
export default {
  data() {
    return {
      comp: "Header"
    };
  },
  computed: {
    component() {
      return getCompByName(this.comp);
    }
  },
  created() {
    console.log(this);
  }
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
