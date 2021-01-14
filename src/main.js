/*
 * @Author: your name
 * @Date: 2020-12-21 09:57:41
 * @LastEditTime: 2021-01-14 13:33:23
 * @LastEditors: quling
 * @Description: In User Settings Edit
 * @FilePath: \Vue\src\main.js
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import store from "./store";

// 全局注册组件
import hello from "./components/HelloWorld.vue";
import TreeFolder from "./views/customEvents/components/treeFolder.vue";

// 全局自定义指令
import "./customInstruction";

Vue.config.productionTip = false;

// 注册全局自定义组件
Vue.component("allButton", {
  data() {
    return { count: 0 };
  },
  template: '<button @click="count++">{{count}}</button>'
});
Vue.component("hello", hello);

Vue.component("TreeFolder", TreeFolder);

var getChildrenTextContent = function(children) {
  if (children) {
    return children
      .map(function(node) {
        // console.log("node:", node);
        return node.children
          ? getChildrenTextContent(node.children)
          : node.text;
      })
      .join("");
  } else {
    return "myTest";
  }
};

Vue.component("anchored-heading", {
  render: function(createElement) {
    // 创建 kebab-case 风格的 ID
    // console.log(this.$slots, this.$scopedSlots);
    var headingId = getChildrenTextContent(this.$slots.name)
      .toLowerCase()
      .replace(/\W+/g, "-")
      .replace(/(^-|-$)/g, "");

    return createElement("h" + this.level, [
      createElement(
        "a",
        {
          attrs: {
            name: headingId,
            href: "#" + headingId
          }
        },
        // this.$slots.name
        this.$scopedSlots.name({ text: "hhh" })
      )
    ]);
  },
  props: {
    level: {
      type: Number,
      required: true
    }
  }
});

const data = {
  address: "四川"
};

/* eslint-disable no-new */
new Vue({
  el: "#app",
  data,
  router,
  store,
  components: { App },
  template: "<App/>"
});
