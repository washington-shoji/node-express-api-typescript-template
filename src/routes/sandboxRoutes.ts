import userController from '../features/sandbox/controller/sandboxController.controller';
import express from 'express';
export const sandboxRouter = express.Router();

const baseApi = '/sandbox/create';

sandboxRouter.post(`${baseApi}`, (req, res, next) => {
    userController.create(req, res, next);
});

sandboxRouter.get(`${baseApi}`, (req, res, next) => {
    res.status(200).json('API Working');
});
