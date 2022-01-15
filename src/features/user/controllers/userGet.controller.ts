import HttpException from '../../../utils/exceptions/http.exception';
import { Request, Response, NextFunction } from 'express';

export class UserGetController {
    public getUser = (
        req: Request,
        res: Response,
        next: NextFunction
    ): Response | void => {
        if (!req.user) {
            return next(new HttpException(404, 'No logged in user'));
        }

        res.status(200).send({ data: req.user });
    };
}

export const userGetController = new UserGetController();
