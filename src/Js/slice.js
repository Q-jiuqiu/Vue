/*
 * @Author: your name
 * @Date: 2020-12-23 15:03:19
 * @LastEditTime: 2020-12-23 15:06:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Vue\src\Js\slice.js
 */
let p = "web/vue-runtime.js";

let base = p.split("/")[0];
console.log(p, base);
console.log(p.slice(base.length + 1));
