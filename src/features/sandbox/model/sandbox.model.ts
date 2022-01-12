import { Schema, model } from 'mongoose';
import { ISandboxDocument } from '../interface/sandbox.interface';

const SandboxSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        body: { type: String, required: true },
    },
    { timestamps: true }
);

export default model<ISandboxDocument>('Sandbox', SandboxSchema);
