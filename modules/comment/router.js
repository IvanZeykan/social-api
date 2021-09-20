const { Router } = require('express');
const { createComment, updateComment, DeleteOne } = require('./controller')
const { verifyToken } = require("../auth/controller");

const router = new Router();

router.post("/:id", verifyToken, createComment);
router.put("/:id", verifyToken, updateComment);
router.delete("/:id", verifyToken, DeleteOne);

module.exports = router;