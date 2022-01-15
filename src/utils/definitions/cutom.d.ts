import { IUserDocument } from './../../features/user/interface/user.interface';

declare global {
    namespace Express {
        export interface Request {
            user: IUserDocument;
        }
    }
}
