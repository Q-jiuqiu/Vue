<template>
  <div class="son">
    <h3>子组件</h3>
    <button @click="emitgetSonCount">触发自定义事件getSonCount</button>
    <div>
      <input
        type="text"
        :value="cc"
        @change="$emit('change', $event.target.value)"
      />
      <!-- <input type="checkbox" v-model="cc" @change="checkInput($event)" /> -->
    </div>
  </div>
</template>

<script>
export default {
  // model属性用来改变默认的v-mode的绑定属性和抛出事件
  model: {
    prop: "cc",
    event: "change"
  },
  // props: {
  //   cc: String
  // },
  props: ["cc"],
  data() {
    return {
      count: 1,
      check: true
    };
  },
  methods: {
    emitgetSonCount() {
      this.$emit("on-click", this.count);
    },
    checkInput(event) {
      console.log(event.target.checked);
    }
  }
};
</script>

<style>
.son {
  border: 1px coral solid;
}
</style>
