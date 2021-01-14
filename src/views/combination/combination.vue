<template>
  <div class="combination">
    <h1>可复用性&组合</h1>

    <!-- <h2>mixins</h2>
    <div class="mixins">
      <p>{{ mixins.num }}</p>
      <p>{{ mixins.name }}</p>
    </div> -->

    <!-- <h2>自定义指令</h2>
    <div class="customInstruction">
      <input type="text" v-focus />
      <input type="text" v-myFocus />
      <p v-pin="600">Stick me 200px from the top of the page</p>
    </div> -->

    <!-- <div class="render">
      <h2>渲染函数 & JSX</h2>
      <router-link to="/combination/render">渲染函数</router-link>
      <div>
        <router-view></router-view>
      </div>
      <div>
        <render2></render2>
        <functional :test="functional" @focus="OnFocus" :attrs="$attrs">
        </functional>
      </div>
    </div> -->

    <!-- <anchored-heading :level="1">Hello world!</anchored-heading> -->

    <div class="filters">
      <h2>过滤器</h2>
      <filters></filters>
    </div>
  </div>
</template>

<script>
// mixins - 混入
import mixins from "./mixins/mixins";
import render2 from "./render/render2";
import functional from "./render/functional";

import Vue from "vue";
import Filters from "./components/filters.vue";

Vue.component("anchored-heading", {
  render: function(createElement) {
    return createElement(
      "h" + this.level, // 标签名称
      this.$slots.default // 子节点数组
    );
  },
  props: {
    level: {
      type: Number,
      required: true
    }
  }
});

export default {
  components: { render2, Filters },
  // mixins - 混入
  mixins: [mixins],
  data() {
    return {
      mixins: {
        num: 123
      },
      functional: "函数式组件"
    };
  },
  // mixins - 混入
  beforeCreate() {
    console.log("==组价 - beforeCreated==");
  },
  // 注册局部自定义指令
  directives: {
    focus: {
      // 指令的定义
      inserted: function(el) {
        el.focus();
      }
    },
    pin: {
      bind(el, binding, vnode) {
        console.log(binding);
        el.style.position = "fixed";
        el.style.top = binding.value + "px";
      }
    }
  },
  methods: {
    H1() {
      console.log(1);
    },
    OnFocus() {
      console.log("==OnFocus==");
    }
  },
  render() {
    //jsx语法
    const htxt = `<h${this.id}>标题${this.txtlists[this.id - 1]}</h${this.id}>`;
    return <div domPropsInnerHTML={htxt}></div>;
  }
};
</script>

<style></style>
