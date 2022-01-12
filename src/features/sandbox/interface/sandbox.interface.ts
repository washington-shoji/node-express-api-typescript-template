import { Document } from 'mongoose';

export interface ISandboxDocument extends Document {
    title: string;
    body: string;
}

// export interface ISandbox {
//     title: string;
//     body: string;
// }
