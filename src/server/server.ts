import path from "path";
import express from "express";
import webpack from "webpack";
import webpackDevMiddleware from "webpack-dev-middleware";
import webpackHotMiddleware from "webpack-hot-middleware";
import config from "../../webpack.config";

const app = express();
const compiler = webpack(config);

// 웹팩 미들웨어 설정
app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output!.publicPath!,
  })
);

// 핫 미들웨어 설정
app.use(webpackHotMiddleware(compiler));

// 정적 파일 제공
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "src")));

// 모든 요청에 대해 index.html 반환
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
