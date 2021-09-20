const Post = require("./schema");
const CommentSchema = "../comment/schema.js";

const postController = {
  async createPost(req, res, next) {
    const post = await Post.create({
      description: req.body.description,
      postedBy: req.user.id,
    });
    if (!post) return res.status(401).json({ message: "Can not create post" });
    res.status(200).json(post);
  },
  async updatePost(req, res, next) {
    try {
      const updatedPost = await Post.findByIdAndUpdate(
        req.params.id,
        {
          ...req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedPost);
    } catch (e) {
      next(e);
    }
  },
  async findOne(req, res, next) {
    try {
      const post = await Post.findOne(req.params.id);
      res.status(200).json(post);
    } catch (e) {
      next(e);
    }
  },
  async findAll(req, res, next) {
    try {
      const post = await Post.find().populate("postedBy").populate("comments");
      res.status(200).json(post);
    } catch (e) {
      next(e);
    }
  },
  async deleteOne(req, res, next) {
    try {
      const deletePost = await Post.findByIdAndDelete(req.params.id);
      if (!deletePost)
        throw `ERROR when deleting post with id ${req.params.id}`;
      res.status(200).json(deletePost);
    } catch (e) {
      next(e);
    }
  },
  async findUserPost(req, res, next) {
    try {
      const post = await Post.find({ postedBy: req.params.id })
        .populate("postedBy")
        .populate("comments");
      res.status(200).json(post);
    } catch (e) {
      next(e);
    }
  },
};

module.exports = postController;
