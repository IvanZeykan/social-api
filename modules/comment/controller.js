const Comment = require('./schema')
const Post = require('../post/schema')

const commentController = {
    async createComment(req, res, next) {
        const post = await Post.findById(res.params.id);
        if (!post) {
            res.status(404).json(" Post not found");
        }
        const comment = await Comment.create({
            text: req.body.text,
            user: req.user.user_id,
        });
        if (comment) {
            post.comments.push(comment.id);
            post.save();
        }
        console.log(post);
        res.status(200).json(comment);
    },
    async updateComment(res, req, next) {
        try {
            const updatedComment = await Comment.findByIdAndUpdate(
                req.params.id,
                {
                    ...req.body,
                },
                { new: true }
            );
            res.status(200).json(updatedComment)
        } catch (e) {
            next(e);
        }
    },
    async DeleteOne(req, res, next) {
        try {
            const deletedComment = await Comment.findAll(req.params.id);
            if (!deleted) throw `ERROR when deleting post with id ${req.params.id}`;
            res.status(200).json(deletedComment);
        } catch (e) {
            next(e);
        }
    },
};

module.exports = commentController