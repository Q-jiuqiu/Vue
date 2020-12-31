<template>
  <div class="eventsHandle">
    <button @click="funA('这是一个：', $event)">访问DOM节点</button>
    <input type="checkbox" id="jack" value="Jack" v-model="checkedNames" />
    <label for="jack">Jack</label>
    <input type="checkbox" id="john" value="John" v-model="checkedNames" />
    <label for="john">John</label>
    <input type="checkbox" id="mike" value="Mike" v-model="checkedNames" />
    <label for="mike">Mike</label>
    <span>Checked names: {{ checkedNames }}</span>
    <br />

    <input type="radio" id="AAA" value="AAA" v-model="radio" />
    <label for="AAA">AAA</label>
    <input type="radio" id="BBB" value="BBB" v-model="radio" />
    <label for="BBB">BBB</label>
    <span>Checked names: {{ radio }}</span>
    <br />

    <input type="text" v-model.trim="text" @change="fun($event)" />
    <div>input-text:{{ text }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checkedNames: [],
      radio: [],
      text: { a: "name" }
    };
  },
  methods: {
    funA(message, event) {
      console.log(message, event.target);
    },
    fun(event) {
      console.log(event);
    }
  }
};
</script>

<style></style>
