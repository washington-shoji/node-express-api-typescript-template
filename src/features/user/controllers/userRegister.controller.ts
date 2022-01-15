import HttpException from './../../../utils/exceptions/http.exception';
import { Request, NextFunction } from 'express';
import { BaseUserController } from '../abstract/baseController.abstract';
import { IUserDocument, IUserService } from './../interface/user.interface';
import { userService } from './../service/user.service';

export class UserRegisterController extends BaseUserController<
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
        const result = await userService.registerUser(parsedData);
        return result;
    }
    protected successCode(): number {
        return 201;
    }
    protected successMessage(): string {
        return 'User successfully registered';
    }

    protected Error(error: any, next: NextFunction): void {
        next(new HttpException(500, error.message));
    }
}

export const userRegisterController = new UserRegisterController(userService);
