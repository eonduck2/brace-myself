@"
{
  "presets": ["@babel/preset-env", "@babel/preset-react", "@babel/preset-typescript"]
}
"@ | Out-File -FilePath .babelrc -Encoding utf8

@"
import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { Configuration } from "webpack";
import { Configuration as DevServerConfiguration } from "webpack-dev-server";

const ___dirname = path.resolve();

const config: Configuration & { devServer?: DevServerConfiguration } = {
  mode: "development",
  entry: path.join(___dirname, "src", "client", "index.tsx"),
  output: {
    path: path.join(___dirname, "dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.jsx?$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css\.ts$/,
        use: [
          "style-loader",
          {
            loader: "@vanilla-extract/webpack-plugin/loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(___dirname, "public", "index.html"),
    }),
  ],
  devServer: {
    static: {
      directory: path.join(___dirname, "public"),
    },
    compress: true,
    port: 3000,
  },
};

export default config;


"@ | Out-File -FilePath webpack.config.ts -Encoding utf8

Write-Output "Setup complete!"