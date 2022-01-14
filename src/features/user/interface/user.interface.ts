import { Document } from 'mongoose';
import { Request } from 'express';

export default interface User extends Document {
    email: string;
    name: string;
    password: string;
    role: string;

    isValidPassword(password: string): Promise<Error | boolean>;
}

export interface IUserService {
    registerUser(req: Request): Promise<User>;
    loginUser(req: Request): Promise<User>;
}
