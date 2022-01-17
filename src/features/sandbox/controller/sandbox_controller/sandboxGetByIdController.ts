import { BaseGetController } from '../../abstract/baseController.abstract';
import { Sandbox } from '../../interface/sandbox.interface';
import { SandboxService, sandboxService } from '../../service/sandbox.service';

export interface GetByIdParams {
    id: string;
}

export class NewSandboxGetByIdController extends BaseGetController<
    Sandbox,
    GetByIdParams,
    {}
> {
    private readonly sandboxService: SandboxService;

    constructor(sandboxService: SandboxService) {
        super();

        this.sandboxService = sandboxService;
    }

    protected authoriseUser(): void {}

    protected async retrieveData(): Promise<Sandbox> {
        return this.sandboxService.getSandboxEntriesById(
            this.parseUrlParams().id
        );
    }

    protected successMessage(): string {
        return 'Successfully retrieved ';
    }
}

export const newSandboxGetByIdController = new NewSandboxGetByIdController(
    sandboxService
).controller;
