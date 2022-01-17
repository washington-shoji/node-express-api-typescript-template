import { Schema, model } from 'mongoose';
import { Sandbox } from '../interface/sandbox.interface';

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

export const SandboxModel = model<Sandbox>('Sandbox', SandboxSchema);
