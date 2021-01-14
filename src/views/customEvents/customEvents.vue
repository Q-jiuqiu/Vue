<template>
  <div class="customEvents">
    <h1>自定义事件</h1>
    <son @on-click="getSonCount" v-model="lovingVue"></son>
    {{ lovingVue }}

    <div class="v-model">
      <h1>v-model</h1>
      <inputPrice v-model="price"></inputPrice>
      <inputPrice @input="onInput" :value="price"></inputPrice>
      <inputPrice
        @focus.native="onFocus"
        placeholder=".native将原生事件绑定到组件"
      ></inputPrice>
      <inputPrice @focus="onFocus" placeholder="无.native"></inputPrice>
      <p>{{ price }}</p>
    </div>

    <!-- <div class="syncAttr">
      <h1>.sync</h1>
      <sync-attr :title="title" @update:title="title = $event"></sync-attr>
      <sync-attr v-bind.sync="obj"></sync-attr>
      <p>{{ obj }}</p>
    </div> -->

    <!-- <div class="slot">
      <h1>插槽</h1>
      <mySlot>
        作用域插槽，简单理解就是了父级能用子组件数据来控制展示内容，数据源是子组件，父组件只是选择哪个展示
        <template v-slot:name1="slotProps">
          <h2>{{ slotProps.message }}</h2>
          <h2>{{ slotProps.message1 }}</h2>
        </template>
      </mySlot>
    </div> -->

    <!-- <div class="transition">
      <h1>transition和keep-alive的混合使用</h1>
      <my-transition></my-transition>
    </div> -->

    <!-- <div class="dependence">
      <h1>依赖注入</h1>
      <dependence></dependence>
    </div> -->

    <div class="loop">
      <h1>循环引入</h1>
      <tree-folder :folder="folder"></tree-folder>
    </div>
  </div>
</template>

<script>
import son from "./components/son.vue";
import inputPrice from "./components/inputPrice.vue";
import SyncAttr from "./components/syncAttr.vue";
import mySlot from "./components/slot.vue";
import myTransition from "./components/transition.vue";
import Dependence from "./components/dependence.vue";
import TreeFolder from "./components/treeFolder.vue";
export default {
  data() {
    return {
      lovingVue: "test",
      price: 100,
      title: "title",
      obj: {
        a: 1,
        b: 3,
        c: [1, 2, 3]
      },
      folder: {
        name: "1",
        children: [
          {
            name: "2",
            children: [
              {
                name: "ang",
                children: [{ name: "ee" }]
              }
            ]
          }
        ]
      }
    };
  },
  provide() {
    return {
      onClick: this
    };
  },
  components: {
    son,
    inputPrice,
    SyncAttr,
    mySlot,
    myTransition,
    Dependence,
    TreeFolder
  },
  methods: {
    getSonCount(value) {
      console.log(value);
    },
    getChange(value) {
      console.log(value);
    },
    onInput(value) {
      this.price = value;
      console.log(value);
    },
    onFocus() {
      console.log("onFocus");
    },
    onClick() {
      console.log("依赖注入");
    }
  },
  watch: {
    price() {
      console.log("price is changed");
    }
  }
};
</script>

<style></style>
