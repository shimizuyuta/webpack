const path = require("path");

module.exports = {
  entry: {
    bundle: "./src/index.ts",
  },
  output: {
    path: path.join(__dirname, "dist"), //bundleで指定した名前が入る
    filename: "[name].js",
  },
  resolve: {
    extensions: [".ts", ".js"], //import/exportの際にfileの拡張子を省くため
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"), //devServerが起動する際にdistを参照する
    open: true, //起動時に自動でブラウザが開かれる
  },
  module: {
    rules: [
      {
        loader: "ts-loader", //ts-loaderの対象とするfileを正規表現を使って指定
        test: /\.ts$/,
      },
    ],
  },
};
