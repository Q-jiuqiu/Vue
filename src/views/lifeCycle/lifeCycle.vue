<template>
  <div class="lifeCycle">
    <div class="num">num:{{ num }}</div>
    <button @click="addNum" type="button">num++</button>
    <button @click="addCount" type="button">count++</button>
    <div class="sum">num+count=sum({{ sum }})</div>
  </div>
</template>

<script>
import { myFun } from "../../Js/brforeCreate";
import Vue from "vue";

export default {
  data() {
    return {
      num: 0,
      count: 0
    };
  },
  methods: {
    addNum() {
      this.num++;
    },
    addCount() {
      this.count++;
    }
  },
  computed: {
    sum() {
      // alert("computed-sum");
      return this.num + this.count;
    }
  },
  beforeCreate() {
    // console.log(this.num); //undefined
    console.log("lifeCycle:===beforeCreate===");
    // console.log(document.getElementsByTagName("div")[2]);
    // console.log(document.getElementsByClassName("time")[0]);

    // 获取data的值
    // 方法1：
    // myFun().then(res => {
    //   console.log(res);
    //   this.time = res;
    // });

    // 方法2：
    // setTimeout(() => {
    //   this.time = "a";
    // });

    // 方法3：
    // this.$nextTick(function() {
    //   this.time = "b";
    // });

    // 方法4：仅可获取，不可修改
    // console.log(this.$options.data().time);
  },
  created() {
    console.log("lifeCycle:===created===");
    // console.log(this.num);
  },
  beforeMount() {
    console.log("lifeCycle:===beforeMount===");
  },
  mounted() {
    console.log("lifeCycle:===Mounted===");
  },
  beforeUpdate() {
    console.log("lifeCycle:===beforeUpdate===");
    console.log(this.num);
    console.log(document.querySelector(".num").innerHTML);
    // this.num++; //num=2,但是此时并不会再次触发beforeUpdate()，因为此时num还没有更新到视图层
  },
  updated() {
    console.log("lifeCycle:===updated===");
    // this.num++; 会产生死循环，因为此时num已经更新到视图层了，再次改变值会依次触发beforeUpdate()，updated()造成死循环
    console.log(document.querySelector(".num").innerHTML);
  },
  beforeDestroy() {
    console.log("lifeCycle:==beforeDestory==");
  },
  destroyed() {
    console.log("lifeCycle:==destoryed==");
  }
};
</script>

<style></style>
