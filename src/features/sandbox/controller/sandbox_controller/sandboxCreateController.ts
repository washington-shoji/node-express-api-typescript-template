import { Request, NextFunction } from 'express';
import HttpException from '../../../../utils/exceptions/http.exception';
import { BaseController } from '../../abstract/baseController.abstract';
import {
    ISandboxDocument,
    ISandboxService,
} from '../../interface/sandbox.interface';
import { sandboxService } from '../../service/sandbox.service';

export class SandboxCreateController extends BaseController<
    ISandboxService,
    Request,
    ISandboxDocument
> {
    constructor(sandboxService: ISandboxService) {
        super(sandboxService);
    }

    protected parseQueryParams(parseArgs: Request): Request {
        return parseArgs;
    }

    protected async processData(
        parsedData: Request
    ): Promise<ISandboxDocument> {
        const result = await sandboxService.createSandboxEntry2(parsedData);
        return result;
    }

    protected successCode(): number {
        return 201;
    }

    protected successMessage(): string {
        return 'Sandbox entry successfully created';
    }

    protected Error(error: any, next: NextFunction): void {
        next(new HttpException(500, error.message));
    }
}

export const sandboxCreateController = new SandboxCreateController(
    sandboxService
);
