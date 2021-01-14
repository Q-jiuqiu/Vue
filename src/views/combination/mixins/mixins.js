export default {
  data() {
    return {
      mixins: {
        num: 234,
        name: "zhang"
      }
    };
  },
  beforeCreate() {
    console.log("==mixins - beforeCreated==");
  }
};
