import sandboxController, {
    sandboxController2,
} from '../features/sandbox/controller/sandboxController.controller';
import express from 'express';

export const sandboxRouter = express.Router();

const baseApi = '/sandbox';

sandboxRouter.get(`${baseApi}`, (req, res, next) => {
    sandboxController.getSandbox(req, res, next);
});
sandboxRouter.get(`${baseApi}/:id`, (req, res, next) => {
    sandboxController.getSandboxById(req, res, next);
});

sandboxRouter.post(`${baseApi}`, (req, res, next) => {
    sandboxController2.handleController(req, res, next);
    //sandboxController.create(req, res, next);
});

sandboxRouter.put(`${baseApi}/:id`, (req, res, next) => {
    sandboxController.updateSandboxById(req, res, next);
});
sandboxRouter.delete(`${baseApi}/:id`, (req, res, next) => {
    sandboxController.deleteSandboxById(req, res, next);
});
