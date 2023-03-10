## webpack

### 1.環境構築
```
npm install --save-dev typescript ts-loader webpack webpack-cli webpack-dev-server
```


|  package             |  説明 |
| ---- | ---- |
|  typescript          |  typescript構文をjs構文に変換するコンパイラ  |
|  webpack             |  複数のファイルを1つにまとめる  |
|  ts-loader           |  webpackと連動してtsコンパイラを起動  |
|  webpack-cli         |  コマンドラインでwebpackを使う  |
|  webpack-dev-server  |  webpackのビルド開発用・webサーバーの起動・ホットリロード  |


|  パッケージ             |  説明 |
| ---- | ---- |
|  eslint-config-prettier          |  ESLintとPrettierを併用する際に  |
|  @typescript-eslint / eslint-plugin  |  ESLintでTSのチェックを行うプラグイン  |
|  @typescript-eslint / parser     |  ESLintでTSを解析できるようにする  |
|  husky         |  gitコマンドをフックに別のコマンドを呼び出せる  |
|  lint-staged   |  commitしたファイルにlintを実行することができる  |


**注意事項**

```
本番環境にはバンドルされたjsを置くため、これらのパッケージは開発環境でしか使わない。よって--save-devが必要！
```
