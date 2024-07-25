import express from 'express';
import controller from '../controllers/userController';

let router = express.Router();

router.post('/register', controller.registerUser);
router.post('/login', controller.loginUser);

export default router;