module.exports = {
  chainWebpack: config => {
    config.resolve.alias.set("iview", "view-design");
  }
};
