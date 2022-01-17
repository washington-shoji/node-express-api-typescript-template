import { NewBasePostController } from '../../abstract/baseController.abstract';
import { Sandbox } from '../../interface/sandbox.interface';
import { SandboxService, sandboxService } from '../../service/sandbox.service';

export class NewSandboxCreateController extends NewBasePostController<Sandbox> {
    private readonly sandBoxService: SandboxService;
    constructor(sandboxService: SandboxService) {
        super();

        this.sandBoxService = sandboxService;
    }

    parseRequestBody(): Sandbox {
        const body: Sandbox = this.request!.body as Sandbox;
        return body;
    }

    async processData(): Promise<Sandbox> {
        return await this.sandBoxService.createSandboxEntry(
            this.parseRequestBody()
        );
    }
}
export const newSandboxCreateController = new NewSandboxCreateController(
    sandboxService
).controller;
