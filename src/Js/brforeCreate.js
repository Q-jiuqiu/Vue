export const myFun = () => {
  let promise = new Promise((resolve, reject) => {
    resolve("成功");
  });
  return promise;
};
