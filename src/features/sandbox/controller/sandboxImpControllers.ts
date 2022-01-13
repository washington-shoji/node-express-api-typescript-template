import { Request, Response, NextFunction } from 'express';
import HttpException from '../../../utils/exceptions/http.exception';
import { BaseController } from '../abstract/baseController.abstract';
import {
    ISandboxDocument,
    ISandboxService,
} from '../interface/sandbox.interface';
import { sandboxService } from '../service/sandbox.service';

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

export class SandboxDeleteController extends BaseController<
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
        return 'The sandbox entry has been deleted';
    }
    protected parseQueryParams(parseArgs: Request): Request {
        return parseArgs;
    }
    protected async processData(
        parsedData: Request
    ): Promise<ISandboxDocument> {
        const result = await sandboxService.deleteSandboxEntry(parsedData);
        return result;
    }

    protected Error(error: any, next: NextFunction): void {
        next(new HttpException(500, error.message));
    }
}

export const sandboxDeleteController = new SandboxDeleteController(
    sandboxService
);

export class SandboxUpdateController extends BaseController<
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
        return 'The sandbox entry has been updated';
    }
    protected parseQueryParams(parseArgs: Request): Request {
        return parseArgs;
    }
    protected async processData(
        parsedData: Request
    ): Promise<ISandboxDocument> {
        const result = await sandboxService.updateSandboxEntry(parsedData);
        return result;
    }

    protected Error(error: any, next: NextFunction): void {
        next(new HttpException(500, error.message));
    }
}

export const sandboxUpdateController = new SandboxUpdateController(
    sandboxService
);

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

export class SandboxGetAllController extends BaseController<
    ISandboxService,
    Request,
    ISandboxDocument[]
> {
    constructor(sandboxService: ISandboxService) {
        super(sandboxService);
    }
    protected successCode(): number {
        return 200;
    }
    protected successMessage(): string {
        return 'The sandbox entries has been fetched';
    }
    protected parseQueryParams(parseArgs: Request): Request {
        return parseArgs;
    }
    protected async processData(
        parsedData: Request
    ): Promise<ISandboxDocument[]> {
        const result = await sandboxService.getSandboxEntries2(parsedData);

        return result;
    }

    protected Error(error: any, next: NextFunction): void {
        next(new HttpException(500, error.message));
    }
}

export const sandboxGetAllController = new SandboxGetAllController(
    sandboxService
);
