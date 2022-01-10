import { Document } from 'mongoose';

export interface ISandbox extends Document {
    title: string;
    body: string;
}
