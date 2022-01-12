import { Request, Response, NextFunction } from 'express';

export abstract class BaseController<T, K, I> {
    protected abstract parseQueryParams(parseArgs: T): K;
    protected abstract processData(parsedData: K): Promise<I>;
    protected abstract successCode(): number;
    protected abstract successMessage(): string;
    protected Error(error: any) {
        throw new Error(error);
    }

    protected constructor() {}

    public async handleController(
        req: Request,
        res: Response,
        next: NextFunction
    ) {
        const parsedData: K = this.parseQueryParams(req.body);

        try {
            const processedData: I = await this.processData(parsedData);

            res.status(this.successCode()).json({
                message: this.successMessage(),
                result: processedData,
            });
        } catch (error: any) {
            this.Error(error);
        }
    }
}
