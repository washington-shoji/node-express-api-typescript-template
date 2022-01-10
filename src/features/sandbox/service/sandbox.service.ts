import SandboxModel from '../model/sandbox.model';
import { ISandbox } from './../interface/sandbox.interface';

class SandboxService {
    private sandbox;

    constructor(sandbox: any) {
        this.sandbox = sandbox;
    }

    /**
     * Create a sandbox entry
     */
    public async createSandboxEntry(sandboxData: ISandbox): Promise<ISandbox> {
        try {
            const result: ISandbox = await this.sandbox.create(sandboxData);
            return result;
        } catch (error) {
            throw new Error('Unable to create a sandbox entry');
        }
    }
}

export default SandboxService;

export const sandboxService = new SandboxService(SandboxModel);
