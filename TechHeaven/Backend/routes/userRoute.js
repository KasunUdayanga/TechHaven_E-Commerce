import express from 'express';
import { loginUser,registerUser } from '../controllers/userController';

const UserRouter = express.Router();

UserRouter.post('/register',registerUser);
UserRouter.post('/login',loginUser);



export default UserRouter;