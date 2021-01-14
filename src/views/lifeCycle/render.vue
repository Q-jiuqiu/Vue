<script>
export default {
  name: "App",
  data() {
    return { time: 0, year: 0, bar: false };
  },
  methods: {
    change() {
      this.time++;
    },
    changeYear() {
      this.year++;
      // console.log(this.year);
    },
    changeBg() {
      this.bar = !this.bar;
    }
  },
  render: function(createElement) {
    console.log("==render==");
    return createElement(
      "div",
      {
        class: {
          test: true,
          bar: false
        },
        style: {
          color: "red"
        },
        domProps: {
          innerHTML: "baz"
        }
      },
      [
        this.time,
        createElement(
          "button",
          {
            on: {
              click: this.change
            }
          },
          "按钮一---改变time"
        ),
        createElement(
          "button",
          {
            on: {
              click: this.changeYear
            }
          },
          "按钮二---改变year"
        ),
        createElement(
          "button",
          {
            on: {
              click: this.changeBg
            }
          },
          "按钮三---改变背景颜色"
        )
      ]
    );
  },
  beforeCreate() {
    console.log("==beforeCreate==");
  },
  created() {
    console.log("==created==");
  },
  beforeMount() {
    console.log("==beforeUpdate==");
  },
  mounted() {
    console.log("==mounted==");
  },
  beforeUpdate() {
    console.log("==beforeUpdate==");
    // console.log(document.querySelector(".test").innerHTML);
    console.log(this.time);
  },
  updated() {
    console.log("==updated==");
    console.log(this.time);
  }
};
</script>

<style scoped>
.test {
  width: 300px;
  height: 300px;
  border: pink 2px solid;
}
.bar {
  background-color: plum;
}
</style>
