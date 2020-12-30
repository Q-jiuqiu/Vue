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

    <!-- key - 会触发新的完整的生命周期 -->
    <mycomponent v-if="show" key="a"> </mycomponent>
    <mycomponent v-else key="b"> </mycomponent>

    <!-- 不会触发新的完整的生命周期，因为仅仅是发生了值的替换 -->
    <mycomponent v-if="show"> </mycomponent>
    <mycomponent v-else> </mycomponent>
    <button @click="show = !show">切换</button>
  </div>
</template>

<script>
import mycomponent from "./component";
export default {
  components: {
    mycomponent
  },
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
        },
        {
          name: "抽纸",
          num: 1,
          price: 5,
          isDisable: false
        },
        {
          name: "盆栽",
          num: 1,
          price: 30,
          isDisable: false
        },
        {
          name: "日记本",
          num: 1,
          price: 18,
          isDisable: false
        }
      ],
      show: true
    };
  },
  methods: {
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
