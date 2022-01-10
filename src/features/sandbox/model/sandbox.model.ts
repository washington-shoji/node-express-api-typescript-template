import { Schema, model } from 'mongoose';
import { ISandbox } from '../interface/sandbox.interface';

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

export default model<ISandbox>('Sandbox', SandboxSchema);
