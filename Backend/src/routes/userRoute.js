import express from 'express';
import controller from '../controllers/userController';

let router = express.Router();

router.post('/user/register', controller.registerUser);
router.post('/user/login', controller.loginUser);

export default router;