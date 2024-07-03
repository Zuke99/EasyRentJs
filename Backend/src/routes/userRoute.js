import express from 'express';
import controller from '../controllers/userController';

let router = express.Router();

router.post('/user/register', controller.registerUser);

export default router;