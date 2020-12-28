/*
 * @Author: your name
 * @Date: 2020-12-23 11:38:15
 * @LastEditTime: 2020-12-23 14:12:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Vue\src\Js\key.js
 */
const replace = require("rollup-plugin-replace");

const builds = {
  h1: {
    a: "sc1",
    b: "123"
  },
  h2: {
    a: "sc2",
    b: "duoDuo"
  },
  h3: {
    a: "sc3",
    b: "aEdv"
  },
  h4: {
    a: "sc4",
    b: "wV23/"
  },
  h5: {
    a: "sc5",
    b: "po@qe"
  }
};

function test(name) {
  let opt = builds[name];
  const config = {
    plugins: [
      replace({
        sc1: "替换",
        "@": "符号"
      })
    ]
  };
  console.log(config.plugins[0].transform);
}

Object.keys(builds).map(test);
