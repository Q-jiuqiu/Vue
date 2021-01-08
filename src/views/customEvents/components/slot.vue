<template id="component2">
  <div style="background-color: #7c9595">
    <slot>默认值1</slot>
    <slot name="name1" :message="message" :message1="message1">
      默认值2
    </slot>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: {
        firstName: "Arya",
        lastName: "Stark"
      },
      message: "测试",
      message1: "测试二"
    };
  }
};
</script>

<style></style>
