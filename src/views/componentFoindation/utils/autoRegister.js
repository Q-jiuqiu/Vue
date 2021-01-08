const files = require.context("../components", true, /\.vue$/);
// console.log(files);

/**
 * @description: 根据组件名自动引入对应组件
 * @param {name} 组件名
 */

const getCompByName = name => {
  let comp = null;
  files.keys().some(item => {
    // console.log(item);
    const fileName = item.replace(/^\.\/(.*\/)?/, "").replace(/\.vue/, "");

    if (name === fileName) {
      comp = files(item);
      // console.log(comp);
      return true;
    }
  });
  return comp.default || comp;
};
export default getCompByName;
