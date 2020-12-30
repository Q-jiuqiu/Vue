<template>
  <div class="ifAndKey">
    <div class="loginByName" v-if="loginType === 'userName'">
      <label>Username</label>
      <input placeholder="Enter your username" />
    </div>
    <div class="loginByEmail" v-else>
      <label>Email</label>
      <input placeholder="Enter your email address" />
    </div>

    <!-- 保证了两个相同元素的完全独立，不复用 -->
    <div class="loginByName" v-if="loginType === 'userName'">
      <label>Username</label>
      <input placeholder="Enter your username" key="username-input" />
    </div>
    <div class="loginByEmail" v-else>
      <label>Email</label>
      <input placeholder="Enter your email address" key="email-input" />
    </div>

    <div class="loginByName" v-show="loginType === 'userName'">
      <label>Username</label>
      <input placeholder="Enter your username" key="username-input" />
    </div>
    <div class="loginByEmail" v-show="loginType === 'email'">
      <label>Email</label>
      <input placeholder="Enter your email address" key="email-input" />
    </div>

    <div>遍历数组</div>
    <div v-for="(item, index) in arr" :key="index">
      <div v-if="item.b < 12">
        {{ item.a }}
      </div>
    </div>

    <div>遍历对象</div>
    <div v-for="(item, name, index) in obj" :key="name">
      item： {{ item }} name： {{ name }} index： {{ index }}
    </div>

    <button @click="change">
      切换
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginType: "userName",
      arr: [
        { id: 1, a: "123", b: 12 },
        { id: 2, a: "123", b: 12 },
        { id: 3, a: "123", b: 12 },
        { id: 4, a: "123", b: 12 },
        { id: 5, a: "123", b: 12 },
        { id: 6, a: "123", b: 12 },
        { id: 7, a: "123", b: 12 },
        { id: 8, a: "123", b: 12 },
        { id: 9, a: "123", b: 12 },
        { id: 10, a: "123", b: 12 },
        { id: 11, a: "123", b: 12 },
        { id: 12, a: "12113", b: 1 },
        { id: 13, a: "123", b: 12 },
        { id: 14, a: "123", b: 12 },
        { id: 15, a: "123", b: 12 },
        { id: 16, a: "123", b: 12 },
        { id: 17, a: "123", b: 12 },
        { id: 18, a: "123", b: 12 }
      ],
      obj: {
        name: "a",
        age: 12,
        sex: "male"
      }
    };
  },
  methods: {
    change() {
      this.loginType = this.loginType === "userName" ? "email" : "userName";
    }
  }
};
</script>

<style></style>
