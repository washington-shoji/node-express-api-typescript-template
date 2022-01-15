import express from 'express';
import authenticatedMiddleware from '../middleware/autheticate/authenticate.middleware';
import { sandboxCreateController } from '../features/sandbox/controller/sandbox_controller/sandboxCreateController';
import { sandboxDeleteController } from '../features/sandbox/controller/sandbox_controller/sandboxDeleteController';
import { sandboxGetAllController } from '../features/sandbox/controller/sandbox_controller/sandboxGetAllController';
import { sandboxGetByIdController } from '../features/sandbox/controller/sandbox_controller/sandboxGetByIdController';
import { sandboxUpdateController } from '../features/sandbox/controller/sandbox_controller/sandboxUpdateController';

export const sandboxRouter = express.Router();

const baseApi = '/sandbox';

sandboxRouter.get(
    `${baseApi}/get`,
    authenticatedMiddleware,
    (req, res, next) => {
        sandboxGetAllController.handleController(req, res, next);
    }
);

sandboxRouter.post(
    `${baseApi}/create`,
    authenticatedMiddleware,
    (req, res, next) => {
        sandboxCreateController.handleController(req, res, next);
    }
);

sandboxRouter.delete(
    `${baseApi}/delete/:id`,
    authenticatedMiddleware,
    (req, res, next) => {
        sandboxDeleteController.handleController(req, res, next);
    }
);
sandboxRouter.put(
    `${baseApi}/update/:id`,
    authenticatedMiddleware,
    (req, res, next) => {
        sandboxUpdateController.handleController(req, res, next);
    }
);

sandboxRouter.get(
    `${baseApi}/get/:id`,
    authenticatedMiddleware,
    (req, res, next) => {
        sandboxGetByIdController.handleController(req, res, next);
    }
);
