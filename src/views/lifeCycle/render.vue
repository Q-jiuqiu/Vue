<script>
export default {
  name: "App",
  data() {
    return { time: 0, year: 0 };
  },
  methods: {
    change() {
      this.time++;
    },
    changeYear() {
      this.year++;
      console.log(this.year);
    }
  },
  render: function(createElement) {
    console.log("==render==");
    return createElement(
      "div",
      {
        class: "test",
        style: {
          color: "red"
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
    console.log(document.querySelector(".test").innerHTML);
    console.log(this.time);
  },
  updated() {
    console.log("==updated==");
    console.log(this.time);
  }
};
</script>
