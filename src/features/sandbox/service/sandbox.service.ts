import { ISandboxDocument } from '../interface/sandbox.interface';
import sandboxModel from '../model/sandbox.model';
//import { ISandbox } from './../interface/sandbox.interface';

class SandboxService {
    private sandbox = sandboxModel;

    constructor(sandbox: any) {
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
}

export default SandboxService;

export const sandboxService = new SandboxService(sandboxModel);
