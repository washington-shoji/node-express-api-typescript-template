import express from 'express';
import authenticatedMiddleware from '../middleware/autheticate/authenticate.middleware';
import { userGetController } from '../features/user/controllers/userGet.controller';
import { userLoginController } from '../features/user/controllers/userLogin.controller';
import { userRegisterController } from '../features/user/controllers/userRegister.controller';

export const userRouter = express.Router();

const baseApi = '/user';

userRouter.post(`${baseApi}/register`, (req, res, next) => {
    userRegisterController.handleController(req, res, next);
});

userRouter.post(`${baseApi}/login`, (req, res, next) => {
    userLoginController.handleController(req, res, next);
});

userRouter.get(`${baseApi}/get`, authenticatedMiddleware, (req, res, next) =>
    userGetController.getUser(req, res, next)
);
