const { Router } = require("express");

const {
    createUser,
    addFriend,
    updateUser,
    findOne,
    findAll,
    deleteUser

} = require("./controller");
const { verifyToken } = require("../auth/controller")

const router = new Router();

router.post("/", verifyToken, createUser);

router.post("/addFriend/:id", verifyToken, addFriend);

router.put("/:id", verifyToken, updateUser);

router.get("/:id", verifyToken, findOne);

router.get("/:all", verifyToken, findAll);

router.delete("/:id", verifyToken, deleteUser);

module.exports = router;
