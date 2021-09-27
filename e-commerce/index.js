const express = require("express");
const path = require("path");
// const morgan = require("morgan");
const nunjucks = require("nunjucks");
const dotenv = require("dotenv");

const connect = require("./schemas");
// const indexRouter = require("./routes/index");
// const usersRouter = require("./routes/users");
// const commentsRouter = require("./routes/comments");
const userRouter = require("./routes/user");
const authRouter = require("./routes/auth");

dotenv.config();
const app = express();
app.set("port", process.env.PORT || 3001);
app.set("view engine", "html");
nunjucks.configure("views", {
	express: app,
	watch: true,
});
connect();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

// app.use((req, res, next) => {
// 	const error = new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
// 	error.status = 404;
// 	next(error);
// });

// app.use((err, req, res, next) => {
// 	res.locals.message = err.message;
// 	res.locals.error = process.env.NODE_ENV !== "production" ? err : {};
// 	res.status(err.status || 500);
// 	res.render("error");
// });

app.listen(app.get("port"), () => {
	console.log(app.get("port"), "번 포트에서 대기 중");
});