<template>
  <div class="command">
    <div class="once" v-once>v-once值不会改变{{ num }}</div>
    <div class="html">
      <div class="html1">不用v-html：{{ html }}</div>
      <div class="html2">使用v-html：<span v-html="html"></span></div>
    </div>
    <div class="attribute">
      <button v-bind:disabled="isButtonDisabled">v-bind:disabled</button>
      <div :class="isA ? classA : classB">A</div>
      <button @click="isA = !isA">isA?</button>
      <div :[clazz]="isA ? classA : classB">A</div>
    </div>
    <button @click="addNum" type="button">num++</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 0,
      html: "<span style='color:#ff0000'>你好<br/>晴天</span>",
      // isButtonDisabled: false, // 不起作用，标签里根本不会有disabled这个属性
      isButtonDisabled: false, // 起作用，标签里有有disabled这个属性
      classA: "classA",
      classB: "classB",
      clazz: "class",
      isA: true
    };
  },
  methods: {
    addNum() {
      this.num++;
      console.log(this.num);
    }
  }
};
</script>

<style scoped>
.classA {
  width: 100px;
  height: 100px;
  background: red;
}
.classB {
  width: 100px;
  height: 100px;
  background: blue;
}
</style>
