import { Request, Response, NextFunction } from 'express';

export abstract class NewBaseController {
    abstract controller(req: Request, res: Response, next: NextFunction): void;

    protected constructor() {}

    protected Error(error: any, next: NextFunction): void {
        throw new Error();
    }
}

export abstract class BaseGetController<T, U, W> extends NewBaseController {
    protected request: Request | undefined;

    protected constructor() {
        super();
    }

    protected abstract authoriseUser(): void;

    protected abstract successMessage(): string;

    protected parseUrlParams(): U {
        // @ts-ignore
        return this.request.params;
    }
    protected parseQueryParams(request: Request): W {
        // @ts-ignore
        return this.request.query;
    }

    protected abstract retrieveData(): Promise<T>;
    protected Error(error: any, next: NextFunction): void {
        throw new Error();
    }

    public async controller(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> {
        try {
            this.request = req;
            await this.authoriseUser();
            const result: T = await this.retrieveData();
            this.request = undefined;
            res.status(200).json({
                message: this.successMessage(),
                result,
            });
        } catch (error: any) {
            next(this.Error(error, next));
        }
    }
}

export abstract class NewBasePostController<T> extends NewBaseController {
    protected request: Request | undefined;
    protected constructor() {
        super();
    }

    abstract parseRequestBody(): T;
    abstract processData(): Promise<T>;

    public async controller(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> {
        try {
            this.request = req;
            const result: T = await this.processData();
            this.request = undefined;
            res.status(201).json({
                message: 'aaa',
                result,
            });
        } catch (error: any) {
            next(this.Error(error, next));
        }
    }
}
