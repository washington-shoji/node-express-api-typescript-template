import { Document } from 'mongoose';
import { Request } from 'express';

export interface IUserDocument extends Document {
    email: string;
    name: string;
    password: string;
    role: string;
    isValidPassword(password: string): Promise<Error | boolean>;
}

export interface IUserService {
    registerUser(req: Request): Promise<IUserDocument | string>;
    loginUser(req: Request): Promise<IUserDocument | string>;
}
