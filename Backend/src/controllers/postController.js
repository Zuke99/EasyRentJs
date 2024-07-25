const PostService = require('../services/postService');
const addPost = async (req, res) => {
    console.log('addPost Controller')
    const data = req.body;
    try {
        const results = await PostService.addPost(data);
        if (results.success)
            return res.status(200).json({ status: 'success', message: 'Post has been created successfully' });
        else
            return res.status(400).json({ status: 'success', message: results.data });
    } catch (err) {
        console.log("Error creating User entry.", err)
        return res.status(500).json({ status: 'error', message: 'Error creating User entry.' });
    }
}

module.exports = {
    addPost
}