import express from 'express';
export const rootRouter = express.Router();

const baseApi = '/';

rootRouter.get(`${baseApi}`, (req, res, next) => {
    res.status(200).json('API Working');
});
