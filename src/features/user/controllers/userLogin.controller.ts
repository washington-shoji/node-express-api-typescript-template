import HttpException from '../../../utils/exceptions/http.exception';
import { Request, NextFunction } from 'express';
import { BaseUserController } from '../abstract/baseController.abstract';
import { IUserDocument, IUserService } from '../interface/user.interface';
import { userService } from '../service/user.service';

export class UserLoginController extends BaseUserController<
    IUserService,
    Request,
    string | IUserDocument | Error
> {
    constructor(userService: IUserService) {
        super(userService);
    }

    protected parseQueryParams(parseArgs: Request): Request {
        return parseArgs;
    }

    protected async processData(
        parsedData: Request
    ): Promise<string | IUserDocument | Error> {
        const result = await userService.loginUser(parsedData);
        return result;
    }
    protected successCode(): number {
        return 200;
    }
    protected successMessage(): string {
        return 'User successfully logged in';
    }

    protected Error(error: any, next: NextFunction): void {
        next(new HttpException(500, error.message));
    }
}

export const userLoginController = new UserLoginController(userService);
