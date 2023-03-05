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

**注意事項**

```
本番環境にはバンドルされたjsを置くため、これらのパッケージは開発環境でしか使わない。よって--save-devが必要！
```
