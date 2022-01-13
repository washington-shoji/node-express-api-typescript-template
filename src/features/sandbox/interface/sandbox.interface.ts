import { Document } from 'mongoose';
import { Request } from 'express';

export interface ISandboxDocument extends Document {
    title: string;
    body: string;
}

export interface ISandboxService {
    createSandboxEntry(
        sandboxData: ISandboxDocument
    ): Promise<ISandboxDocument>;
    updateSandboxEntry(req: Request): Promise<ISandboxDocument>;

    getSandboxEntries(): Promise<ISandboxDocument[]>;
    getSandboxEntriesById(req: Request): Promise<ISandboxDocument>;
    deleteSandboxEntry(req: Request): Promise<ISandboxDocument>;
}
