const PostModel = require('../models/post');

const addPost = async (data) => {
    try{
        const newPost = await PostModel.create(data);
        const result = newPost.save();
        return {
            success: true,
            data: result
        }
    } catch (error) {
       return {
            success: false,
            data: error
       };
    }
}

module.exports = {
    addPost
}