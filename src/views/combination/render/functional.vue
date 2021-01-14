<script>
export default {
  functional: true,
  props: ["test"],
  data() {
    return {
      a: 1,
      b: "12",
      c: [12, 4]
    };
  },
  methods: {
    myClick(event) {
      console.log(event);
    }
  },
  render(h, context) {
    console.log("context:", context.data);
    return h("input", context.data, context.children);
    //  "p",
    //   {
    //     props: {
    //       test: context.props.test
    //     },
    //     attrs: {
    //       id: "nihao"
    //     }
    //     // on: {
    //     //   click: this.myClick
    //     // }
    //   },
    //   context.props.test
  }
};
</script>

<style></style>
