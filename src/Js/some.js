/*
 * @Author: your name
 * @Date: 2020-12-23 14:23:27
 * @LastEditTime: 2020-12-23 14:29:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Vue\src\Js\some.js
 */
let arr = [2, "abc", "erf", 1, 78, 32];

console.log(
  arr.some(item => {
    console.log(item);
    return item == "erf";
  })
);
