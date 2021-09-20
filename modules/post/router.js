const { Router } = require("express");

const {
  createPost,
  updatePost,
  findAll,
  findOne,
  findUserPost,
  deleteOne,
} = require("./controller");
const { verifyToken } = require("../auth/controller");

const {find} = require("./schema")

const router = new Router();

router.post("/", verifyToken, createPost);

router.put("/:id", verifyToken, updatePost);

router.get("/all", verifyToken, findAll);

router.get("/:id", verifyToken, findOne);

router.get("/findPost/:id", verifyToken, findUserPost);

router.delete("/:id", verifyToken, deleteOne);

module.exports = router;
