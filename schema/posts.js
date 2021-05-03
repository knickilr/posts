const mongoose = require('mongoose')

const postsSchema = new mongoose.Schema({
    name: {
        type: String
    },
    post: {
        type: String
    }
})

const Posts = mongoose.model('posts', postsSchema);

module.exports = Posts;