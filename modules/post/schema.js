const {Schema, model, Types} = require('mongoose');

const PostSchema = new Schema({
    image: String,
    description: {
        type: String,
        trim: true,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now
    },
    postedBy: {
        type: Types.ObjectId,
        ref: "User"
    },
    comments: [{
        type: Types.ObjectId,
        ref: 'Comment',
    }
    ]
});

module.exports = model("Post",PostSchema);