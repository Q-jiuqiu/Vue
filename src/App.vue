<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>-->
  <!-- <div>
    <router-view />
  </div>-->

  <!-- <div>
    <ifAndShow />
    <props :minLength="2" />
    <myslot>你好</myslot>
  </div>-->
  <div>
    <Scroll :on-reach-bottom="handleReachBottom">
      <Card
        dis-hover
        v-for="(item, index) in list1"
        :key="index"
        style="margin: 32px 0"
      >Content {{ item }}</Card>
    </Scroll>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list1: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    };
  },
  methods: {
    handleReachBottom() {
      return new Promise((resolve) => {
        console.log(1);
        //setTimeout(() => {
        const last = this.list1[this.list1.length - 1];
        for (let i = 1; i < 11; i++) {
          this.list1.push(last + i);
        }
        resolve();
        //   }, 2000);
      });
    }
  }
};
</script>
