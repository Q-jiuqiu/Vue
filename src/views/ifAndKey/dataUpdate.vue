<template>
  <div class="shopCar">
    <div v-for="(item, index) in goods" :key="index">
      <div>商品：{{ item.name }}</div>
      <div>
        <button @click="minus(index)" :disabled="item.isDisable">
          减少
        </button>
        数量：{{ item.num }}
        <button @click="add(index)">增加</button>
      </div>
      <div>价格：{{ item.price }}</div>
      <div>总价：{{ sum(item.num, item.price) }}</div>
      <div>
        操作：
        <button @click="deleteGood(item, index)">删除</button>
      </div>
      <hr />
    </div>
    <div>总计：{{ total() }}</div>
    <div>obj的属性：{{ obj }}</div>

    <button @click="addGoods">
      增加新商品
    </button>
    <!-- 不能实现清空数组的功能 -->
    <button @click="deletedAll">清空数组：length=0</button>
    <!-- 可以实现清空数组的功能 -->
    <button @click="goods = []">清空数组：数组=[]</button>

    <button @click="addAttrB" key="v">obj增加b属性</button>

    <button @click="deletedAttrA">obj删除a属性</button>
  </div>
</template>

<script>
import Vue from "vue";

export default {
  data() {
    return {
      goods: [
        {
          name: "遮阳帽",
          num: 1,
          price: 45,
          isDisable: false
        },
        {
          name: "曲奇饼干",
          num: 1,
          price: 35,
          isDisable: false
        }
      ],
      obj: {
        a: 1
      }
    };
  },
  methods: {
    deletedAll() {
      this.goods.length = 0;
      console.log(this.goods);
    },
    addGoods() {
      // 直接通过下标增加数组元素不会重新渲染，因为监听不到数组的变化
      // this.goods[2] = { name: "薯片", num: 1, price: 8, isDisable: false };

      // 正确方法一：
      // Vue.set(this.goods, 2, {
      //   name: "薯片",
      //   num: 1,
      //   price: 8,
      //   isDisable: false
      // });

      // 方法二：
      this.goods.splice(this.goods.length, 0, {
        name: "薯片",
        num: 1,
        price: 8,
        isDisable: false
      });
      console.log(this.goods);
    },
    addAttrB() {
      //  增加属性b页面并不会重新渲染，因为监听不到对象的变化
      // this.obj.b = 2;

      // 会重新渲染页面
      // Vue.set(this.obj, "b", 2);
      // this.$set(this.obj, "b", 2);
      this.obj = Object.assign({}, this.obj, { b: 2 });
      console.log(this.obj);
    },
    deletedAttrA() {
      // 删除属性aDF页面并不会重新渲染，因为监听不到对象的变化
      delete this.obj.a;
      console.log(this.obj);
    },
    sum(num, price) {
      return num * price;
    },
    minus(index) {
      if (this.goods[index].num - 1 > 0) {
        this.goods[index].num--;
        this.goods[index].isDisable = false;
      } else {
        this.goods[index].isDisable = true;
      }
    },
    add(index) {
      this.goods[index].num++;
      if (this.goods[index].num > 0) {
        this.goods[index].isDisable = false;
      } else {
        this.goods[index].isDisable = true;
      }
    },
    deleteGood(item, index) {
      let indexof = this.goods.indexOf(item);
      this.goods.splice(indexof, 1);
      console.log(this.goods);
    },
    total() {
      let total = 0;
      for (let key in this.goods) {
        total = total + this.goods[key].num * this.goods[key].price;
      }
      return total;
    }
  },
  beforeUpdate() {
    console.log("===beforeUpdate===");
  },
  updated() {
    console.log("===updated===");
  }
};
</script>

<style></style>
