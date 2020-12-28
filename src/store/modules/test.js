/*
 * @Author: your name
 * @Date: 2020-12-24 14:09:23
 * @LastEditTime: 2020-12-24 14:37:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Vue\src\store\modules\test.js
 */
const test = {
  state: {
    age: "",
    department: "文学部"
  },
  mutations: {
    ["SET_DEPARTMENT"](state, department) {
      state.department = department;
    }
  },
  actions: {
    ["SET_DEPARTMENT"](state, department) {
      state.department = department;
    }
  },
  getters: {
    department: state => state.department
  }
};

export default test;
