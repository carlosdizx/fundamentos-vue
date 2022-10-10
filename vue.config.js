const { defineConfig } = require("@vue/cli-service");
const path = require("path");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    open: true,
    compress: true,
    https: true,
    hot: true,
    allowedHosts: "all",
    historyApiFallback: true,
    port: 8080,
    host: "localhost",
    static: {
      directory: path.resolve(__dirname, "./app"),
      staticOptions: {},
      watch: true,
    },
  },
});
