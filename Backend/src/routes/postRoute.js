import express from 'express';
const postController = require('../controllers/postController')

let router = express.Router();

router.post('/new-post', postController.addPost);

export default router;