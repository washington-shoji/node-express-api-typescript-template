import jwt from 'jsonwebtoken';
import { IUserDocument } from './../../features/user/interface/user.interface';
import { IToken } from './token.interface';
export const createToken = (user: IUserDocument): string => {
    const jwtToken = jwt.sign(
        { id: user._id },
        process.env.JWT_SECRET as jwt.Secret,
        {
            expiresIn: '1d',
        }
    );
    return jwtToken;
};

export const verifyToken = async (
    token: string
): Promise<jwt.VerifyErrors | IToken> => {
    return new Promise((resolve, reject) => {
        jwt.verify(
            token,
            process.env.JWT_SECRET as jwt.Secret,
            (err, payload) => {
                if (err) return reject(err);
                resolve(payload as IToken);
            }
        );
    });
};
