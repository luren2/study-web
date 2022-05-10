const path = require('path');
const resolve = (dir) => path.resolve(__dirname, dir);

module.exports = {
  webpack: {
    alias: {
      '@': resolve('src'),
      components: resolve('src/components'),
    },
  },
  // devServer: {
  //   proxy: {
  //     '/api': {
  //       target: 'https://api.wmdb.tv/api',
  //       changeOrigin: true,
  //       pathRewrite: {
  //         '^/api': '',
  //       },
  //     },
  //   },
  // },
};
