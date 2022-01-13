import HttpException from '../../../utils/exceptions/http.exception';
import { Request, Response, NextFunction } from 'express';
import { sandboxService } from '../service/sandbox.service';
import {
    ISandboxDocument,
    ISandboxService,
} from '../interface/sandbox.interface';
import { BaseController } from '../abstract/baseController.abstract';

export class SandboxController {
    private readonly sandboxService: ISandboxService;

    constructor(sandboxService: ISandboxService) {
        this.sandboxService = sandboxService;
    }
    public async create(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> {
        try {
            const data = req.body;

            const result = await this.sandboxService.createSandboxEntry(data);

            res.status(201).json({
                message: 'Sandbox successfully created',
                result,
            });
        } catch (error: any) {
            next(new HttpException(500, error.message));
        }
    }

    public async updateSandboxById(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> {
        try {
            const result = await this.sandboxService.updateSandboxEntry(req);

            res.status(200).json({
                message: 'Sandbox entry successfully updated',
                result,
            });
        } catch (error: any) {
            next(new HttpException(500, error.message));
        }
    }

    public async deleteSandboxById(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> {
        try {
            const result = await this.sandboxService.deleteSandboxEntry(req);

            res.status(200).json({
                message: 'Sandbox entry successfully deleted',
                result,
            });
        } catch (error: any) {
            next(new HttpException(500, error.message));
        }
    }

    public async getSandbox(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> {
        try {
            const result = await this.sandboxService.getSandboxEntries();

            res.status(200).json({
                message: 'Sandbox entries successfully fetched',
                result,
            });
        } catch (error: any) {
            next(new HttpException(500, error.message));
        }
    }

    public async getSandboxById(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> {
        try {
            const result = await this.sandboxService.getSandboxEntriesById(req);

            res.status(200).json({
                message: 'Sandbox entries successfully fetched',
                result,
            });
        } catch (error: any) {
            next(new HttpException(500, error.message));
        }
    }
}

const sandboxController = new SandboxController(sandboxService);
export default sandboxController;

export class SandboxController2 extends BaseController<
    ISandboxService,
    ISandboxDocument
> {
    constructor(sandboxService: ISandboxService) {
        super(sandboxService);
    }

    protected parseQueryParams(parseArgs: Request): ISandboxDocument {
        return parseArgs.body;
    }

    protected async processData(
        parsedData: ISandboxDocument
    ): Promise<ISandboxDocument> {
        const result = await sandboxService.createSandboxEntry(parsedData);
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

export const sandboxController2 = new SandboxController2(sandboxService);
