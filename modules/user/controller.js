const User = require("./schema");
const { validateCreateUser } = require("./validation");

const UserController = {
  async createUser(req, res, next) {
    try {
      const isNotValid = validateCreateUser(req.body);
      if (isNotValid) return res.status(401).json({ isNotValid });
      const user = await User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      });
      res.status(200).json(user);
    } catch (e) {
      next(e);
    }
  },

  async addFriend(req, res, next) {
    const friend = await User.findById(req.params.id);
    if (!friend) {
      return res.status(404).json("User not found");
    }
    const user = await User.findById(req.params.id);
    if (user.friends.includes(req.params.id)) {
      return res.status(401).json("This user already has a friend");
    }
    user.friends.push(friend.id);
    user.save();
    res.status(200).json("User is successfully created!");
  },

  async updateUser(req, res, next) {
    try {
      const updated = await User.findByIdAndUpdate(
        req.params.id,
        {
          ...req.body,
        },
        { new: true }
      );
      res.status(200).json(updated);
    } catch (e) {
      next(e);
    }
  },

  async findOne(req, res, next) {
    try {
      const user = await User.findById(req.params.id);
      res.status(200).json(user);
    } catch (e) {
      next(e);
    }
  },

  async findAll(req, res, next) {
    try {
      const user = await User.find();
      res.status(200).json(user);
    } catch (e) {
      next(e);
    }
  },

  async deleteUser(req, res, next) {
    try {
      const deleteUser = await User.findByIdAndDelete(req.params.id);
      if (!deleteUser)
        throw `ERROR when deleting user followed Id: ${req.params.id}`;
      res.status(200).json(deleteUser);
    } catch (e) {
      next(e);
    }
  },
};

module.exports = UserController;
