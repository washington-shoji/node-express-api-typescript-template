import express from 'express';
import { userRegisterController } from '../features/user/controllers/userRegister.controller';

export const userRouter = express.Router();

const baseApi = '/user';

userRouter.post(`${baseApi}/register`, (req, res, next) => {
    userRegisterController.handleController(req, res, next);
});
