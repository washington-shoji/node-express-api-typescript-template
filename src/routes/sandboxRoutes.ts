import userController from '../features/sandbox/controller/sandboxController.controller';
import express from 'express';
export const sandboxRouter = express.Router();

const baseApi = '/sandbox';

sandboxRouter.post(`${baseApi}`, (req, res, next) => {
    userController.create(req, res, next);
});

sandboxRouter.put(`${baseApi}/:id`, (req, res, next) => {
    userController.updateSandboxById(req, res, next);
});
sandboxRouter.delete(`${baseApi}/:id`, (req, res, next) => {
    userController.deleteSandboxById(req, res, next);
});

sandboxRouter.get(`${baseApi}/:id`, (req, res, next) => {
    userController.getSandboxById(req, res, next);
});
sandboxRouter.get(`${baseApi}`, (req, res, next) => {
    userController.getSandbox(req, res, next);
});
