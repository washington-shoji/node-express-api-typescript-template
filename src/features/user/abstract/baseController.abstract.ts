import { Request, Response, NextFunction } from 'express';

export abstract class BaseUserController<T, U, W> {
    private readonly service: T;

    constructor(service: T) {
        this.service = service;
    }

    protected abstract successCode(): number;
    protected abstract successMessage(): string;
    protected abstract parseQueryParams(parseArgs: Request): U;

    protected abstract processData(parsedData: U): Promise<W>;
    protected abstract Error(error: any, next: NextFunction): void;

    public async handleController(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> {
        try {
            const result = await this.processData(this.parseQueryParams(req));
            res.status(this.successCode()).json({
                message: this.successMessage(),
                result,
            });
        } catch (error: any) {
            next(this.Error(error, next));
        }
    }
}
