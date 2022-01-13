import {
    sandboxCreateController,
    sandboxDeleteController,
    sandboxUpdateController,
    sandboxGetByIdController,
    sandboxGetAllController,
} from '../features/sandbox/controller/sandboxImpControllers';
import express from 'express';

export const sandboxRouter = express.Router();

const baseApi = '/sandbox';

sandboxRouter.get(`${baseApi}`, (req, res, next) => {
    sandboxGetAllController.handleController(req, res, next);
});

sandboxRouter.post(`${baseApi}`, (req, res, next) => {
    sandboxCreateController.handleController(req, res, next);
});

sandboxRouter.delete(`${baseApi}/:id`, (req, res, next) => {
    sandboxDeleteController.handleController(req, res, next);
});
sandboxRouter.put(`${baseApi}/:id`, (req, res, next) => {
    sandboxUpdateController.handleController(req, res, next);
});

sandboxRouter.get(`${baseApi}/:id`, (req, res, next) => {
    sandboxGetByIdController.handleController(req, res, next);
});
