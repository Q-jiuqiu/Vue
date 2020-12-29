<template>
  <div class="computed-watch">
    <div class="computed">computed: {{ reverseMessage }}</div>
    <!-- <div class="computed">computed: {{ reverseMessage }}</div> -->
    <!-- 
      <div class="methods">methods: {{ reversedMessage() }}</div> 
      在测试watch时每触发一次num++操作，reversedMessage()就会被调用，因为beforeUpate之后会触发render函数重新渲染，而methods又没有缓存所以会被再次执行
    -->
    <div class="methods">methods: {{ reversedMessage() }}</div>
    <div class="num">num*2={{ res }}</div>
    <button @click="addNum" type="button">Num++</button>
    <button @click="changeMessage">changeMessage</button>
    <button @click="computedSet">调用computed的set方法</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "Hello World!",
      num: 0,
      res: 0
    };
  },
  watch: {
    // num(newValue, oldValue) {
    //   console.log("num-change:num=", newValue);
    //   this.res = newValue * 2;
    // }
    num: {
      handler(newValue, oldValue) {
        console.log("start num-change:num=", newValue);
        // 可以异步
        setTimeout(() => {
          this.res = newValue * 2;
        }, 1000);
        console.log("end num-change:num=", newValue);
      },
      immediate: true,
      deep: true
    }
  },
  methods: {
    addNum() {
      this.num++;
    },
    changeMessage() {
      this.message = this.message === "你好" ? "Hello World!" : "你好";
    },
    computedSet() {
      this.reverseMessage = "ab"; //调用computed属性里的reverseMessage的set方法
    },
    reversedMessage() {
      console.log("methos-reverseMessage");
      return this.message
        .split("")
        .reverse()
        .join("");
    }
  },
  computed: {
    // 写法一：
    reverseMessage: {
      get() {
        console.log("computed-get");
        // 异步操作时无效，无法监听数据的变化
        return this.message
          .split("")
          .reverse()
          .join("");
      },
      set(newValue) {
        console.log("computed-set");
        console.log(newValue);
        this.message = newValue;
      }
    }

    // 写法二：
    // reverseMessage() {
    //   console.log("computed-reverseMessage");
    //   return Date.now();
    // }
  }
};
</script>

<style></style>
