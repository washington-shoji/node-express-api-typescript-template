import { Request, NextFunction } from 'express';
import HttpException from '../../../../utils/exceptions/http.exception';
import { BaseController } from '../../abstract/baseController.abstract';
import {
    ISandboxDocument,
    ISandboxService,
} from '../../interface/sandbox.interface';
import { sandboxService } from '../../service/sandbox.service';

export class SandboxGetByIdController extends BaseController<
    ISandboxService,
    Request,
    ISandboxDocument
> {
    constructor(sandboxService: ISandboxService) {
        super(sandboxService);
    }
    protected successCode(): number {
        return 200;
    }
    protected successMessage(): string {
        return 'The sandbox entry has been fetched';
    }
    protected parseQueryParams(parseArgs: Request): Request {
        return parseArgs;
    }
    protected async processData(
        parsedData: Request
    ): Promise<ISandboxDocument> {
        const result = await sandboxService.getSandboxEntriesById(parsedData);
        return result;
    }

    protected Error(error: any, next: NextFunction): void {
        next(new HttpException(500, error.message));
    }
}

export const sandboxGetByIdController = new SandboxGetByIdController(
    sandboxService
);
