const { Router } = require('express');

const userRouter = require('./modules/user/router');

const postRouter = require('./modules/post/router');

const commentRouter = require('./modules/comment/router');

const authRouter = require('./modules/auth/router');

const router = new Router();

router.use("/user", userRouter);

router.use("/post", postRouter);

router.use("/comment", commentRouter);

router.use("/auth", authRouter);

module.exports = router;