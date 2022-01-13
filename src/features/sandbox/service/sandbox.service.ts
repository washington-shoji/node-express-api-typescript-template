import { Request } from 'express';
import { Model } from 'mongoose';
import { ISandboxDocument } from '../interface/sandbox.interface';
import sandboxModel from '../model/sandbox.model';

class SandboxService {
    static createSandboxEntry2(
        parsedData: Request<
            import('express-serve-static-core').ParamsDictionary,
            any,
            any,
            import('qs').ParsedQs,
            Record<string, any>
        >
    ) {
        throw new Error('Method not implemented.');
    }
    private sandbox: Model<ISandboxDocument>;

    constructor(sandbox: Model<ISandboxDocument>) {
        this.sandbox = sandbox;
    }

    /**
     * Create a sandbox entry
     */
    public async createSandboxEntry(
        sandboxData: ISandboxDocument
    ): Promise<ISandboxDocument> {
        try {
            const result = await this.sandbox.create(sandboxData);
            return result;
        } catch (error) {
            throw new Error('Unable to create a sandbox entry');
        }
    }

    public async createSandboxEntry2(req: Request): Promise<ISandboxDocument> {
        try {
            const data = req.body;
            const result = await this.sandbox.create(data);
            return result;
        } catch (error) {
            throw new Error('Unable to create a sandbox entry');
        }
    }

    /**
     * Update a sandbox entry by id
     */
    public async updateSandboxEntry(req: Request): Promise<ISandboxDocument> {
        try {
            const id = req.params.id;
            const { title, body } = req.body;

            const result = await this.sandbox.findByIdAndUpdate(
                id,
                { title, body },
                { returnDocument: 'after' }
            );
            if (!result) {
                throw new Error(`Unable to find sandbox with id: ${id}`);
            }
            return result;
        } catch (error) {
            throw new Error('Unable to update a sandbox entry');
        }
    }

    /**
     * Get all sandbox entries
     */

    public async getSandboxEntries(): Promise<ISandboxDocument[]> {
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

    public async getSandboxEntries2(req: Request): Promise<ISandboxDocument[]> {
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

    /**
     * Get a sandbox entry by id
     */

    public async getSandboxEntriesById(
        req: Request
    ): Promise<ISandboxDocument> {
        try {
            const id = req.params.id;
            const result = await this.sandbox.findById(id);
            if (!result) {
                throw new Error(`Unable to fetch sandbox entry ${id}`);
            }
            return result;
        } catch (error) {
            throw new Error('Unable to get sandbox entry');
        }
    }

    /**
     * Delete a sandbox entry by id
     */
    public async deleteSandboxEntry(req: Request): Promise<ISandboxDocument> {
        try {
            const id = req.params.id;

            const result = await this.sandbox.findByIdAndDelete(id);
            if (!result) {
                throw new Error(`Unable to find sandbox with id: ${id}`);
            }
            return result;
        } catch (error) {
            throw new Error('Unable to delete a sandbox entry');
        }
    }
}

export default SandboxService;

export const sandboxService = new SandboxService(sandboxModel);
