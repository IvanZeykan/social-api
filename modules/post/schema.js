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
    comment: [{
        type: Types.ObjectId,
        ref: 'comment',
    }
    ]
});

module.exports = model("Post",PostSchema);