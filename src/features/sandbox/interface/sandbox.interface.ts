import { Document } from 'mongoose';

export interface ISandboxDocument extends Document {
    id?: string;
    title: string;
    body: string;
}

export interface Sandbox {
    _id?: string;
    title: string;
    body: string;
}
