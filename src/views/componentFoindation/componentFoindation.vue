<template>
  <div>
    <!-- <div>这是一个全局组件</div>
    <allButton></allButton>
    <allButton></allButton> -->

    <!-- <div>这是一个局部组件</div>
    <myButton></myButton>
    <myButton></myButton> -->
    {{ a }}
    <allButton></allButton>
    <!-- <hello></hello> -->
    <hello-world></hello-world>
    <test-comp></test-comp>
    <component :is="Comp"></component>
    <prop class="myCom" :compA="a" color="red"></prop>
  </div>
</template>

<script>
import getCompByName from "./utils/autoRegister";

import prop from "./Prop/Prop";

export default {
  components: {
    prop
  },
  // components: { HelloWorld, TestComp },
  // 局部组件注册
  // components: {
  //   myButton: {
  //     template: '<button @click="add">{{count}}</button>',
  //     data() {
  //       return {
  //         count: 1
  //       };
  //     },
  //     methods: {
  //       add() {
  //         this.count++;
  //       }
  //     }
  //   }
  // }

  // 错误示范
  // data: {
  //   a: 111
  // },

  // 正确示范
  data() {
    // console.log("==data==");
    return {
      a: 111
    };
  },
  // beforeCreate() {
  //   console.log("===beforeCreate===");
  // },

  computed: {
    Comp() {
      // return getCompByName("Header");
      return getCompByName("Body");
    }
  }

  // created() {
  // console.log("===created===");
  // console.log(files);
  // }
  // beforeMount() {
  //   console.log("===beforeMount===");
  // },
  // mounted() {
  //   console.log("===Mounted===");
  // },
  // beforeUpdate() {
  //   console.log("===beforeUpdate===");
  // },
  // updated() {
  //   console.log("===updated===");
  // },
  // beforeDestroy() {
  //   console.log("==beforeDestory==");
  // },
  // destroyed() {
  //   console.log("==destoryed==");
  // }
};
</script>

<style></style>
