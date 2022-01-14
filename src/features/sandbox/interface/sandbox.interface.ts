import { Document } from 'mongoose';
import { Request } from 'express';

export interface ISandboxDocument extends Document {
    id?: string;
    title: string;
    body: string;
}

export interface ISandboxService {
    createSandboxEntry(req: Request): Promise<ISandboxDocument>;
    updateSandboxEntry(req: Request): Promise<ISandboxDocument>;

    getSandboxEntries(req: Request): Promise<ISandboxDocument[]>;
    getSandboxEntriesById(req: Request): Promise<ISandboxDocument>;
    deleteSandboxEntry(req: Request): Promise<ISandboxDocument>;
}
