module.exports = {
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          'primary-color': '#74B618', // 修改全局主色，根据less-loader进行配置
        },
        javascriptEnabled: true,
      },
    },
  },
};
