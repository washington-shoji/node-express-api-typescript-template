import { Request } from 'express';
import { Model } from 'mongoose';
import { ISandboxDocument, Sandbox } from '../interface/sandbox.interface';
import { SandboxModel } from '../model/sandbox.model';

export class SandboxService {
    private sandbox: Model<Sandbox>;

    constructor() {
        this.sandbox = SandboxModel;
    }

    public async createSandboxEntry(sandbox: Sandbox): Promise<Sandbox> {
        try {
            const result: Sandbox = await this.sandbox.create(sandbox);
            return result;
        } catch (error) {
            throw new Error('Unable to create a sandbox entry');
        }
    }

    public async updateSandboxEntry(sandbox: Sandbox): Promise<Sandbox> {
        try {
            const result = await this.sandbox.findByIdAndUpdate(
                sandbox._id,
                sandbox,
                {
                    returnDocument: 'after',
                }
            );
            if (!result) {
                throw new Error(`Unable to find sandbox entry`);
            }
            return result;
        } catch (error) {
            throw new Error('Unable to update a sandbox entry');
        }
    }

    public async getSandboxEntries(): Promise<Sandbox[]> {
        try {
            const result = await this.sandbox.find({});
            if (!result) {
                throw new Error(`Unable to fetch sandbox entries`);
            }
            return result;
        } catch (error) {
            throw new Error('Unable to get sandbox entries');
        }
    }

    public async getSandboxEntriesById(sandboxId: string): Promise<Sandbox> {
        try {
            const result: Sandbox | null = await this.sandbox.findById(
                sandboxId
            );
            if (!result) {
                throw new Error(`Unable to fetch sandbox entry`);
            }
            return result;
        } catch (error) {
            throw new Error('Unable to get sandbox entry');
        }
    }

    public async deleteSandboxEntry(id: string): Promise<void> {
        try {
            const result = await this.sandbox.findByIdAndDelete(id);
            if (!result) {
                throw new Error(`Unable to find sandbox entry`);
            }
        } catch (error) {
            throw new Error('Unable to delete a sandbox entry');
        }
    }
}

export const sandboxService = new SandboxService();
