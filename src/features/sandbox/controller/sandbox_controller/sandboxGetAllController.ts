import { BaseGetController } from '../../abstract/baseController.abstract';

import { Sandbox } from '../../interface/sandbox.interface';
import { SandboxService, sandboxService } from '../../service/sandbox.service';

export class NewSandboxGetAllController extends BaseGetController<
    Sandbox[],
    {},
    {}
> {
    private readonly sandboxService: SandboxService;

    public constructor(sandboxService: SandboxService) {
        super();

        this.sandboxService = sandboxService;
    }

    protected async retrieveData(): Promise<Sandbox[]> {
        const result: Sandbox[] = await sandboxService.getSandboxEntries();
        return result;
    }

    protected successMessage(): string {
        return 'Successfully retrieved sandboxes';
    }

    protected async authoriseUser(): Promise<void> {}
}

export const newSandboxGetAllController = new NewSandboxGetAllController(
    sandboxService
).controller;
