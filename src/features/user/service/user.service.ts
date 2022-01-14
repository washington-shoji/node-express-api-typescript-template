import { Request } from 'express';
import { Model } from 'mongoose';
import { createToken } from 'utils/token/token';
import { IUserDocument } from '../interface/user.interface';
import userModel from '../model/user.model';

class UserService {
    private user: Model<IUserDocument>;

    constructor(user: Model<IUserDocument>) {
        this.user = user;
    }

    /**
     * Register a new user
     */
    public async registerUser(req: Request): Promise<string | Error> {
        try {
            const data = req.body;
            const user = await this.user.create({
                data,
            });

            const accessToken = createToken(user);

            return accessToken;
        } catch (error: any) {
            throw new Error(error.message);
        }
    }

    /**
     * Attempt to login a user
     */
    public async loginUser(req: Request): Promise<string | Error> {
        try {
            const { email, password } = req.body;
            const user = await this.user.findOne({ email });

            if (!user) {
                throw new Error('Unable to find user with that email address');
            }

            if (await user.isValidPassword(password)) {
                return createToken(user);
            } else {
                throw new Error('Wrong credentials given');
            }
        } catch (error) {
            throw new Error('Unable to create user');
        }
    }
}

export const userService = new UserService(userModel);
