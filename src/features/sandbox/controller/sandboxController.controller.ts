import HttpException from '../../../utils/exceptions/http.exception';
import { Request, Response, NextFunction, Router } from 'express';
import SandboxService, { sandboxService } from '../service/sandbox.service';

// export class SandboxCreateController extends BaseController<
//     ISandbox,
//     ISandbox,
//     ISandbox
// > {
//     private readonly sandboxService: SandboxService;

//     constructor(sandboxService: SandboxService) {
//         super();
//         this.sandboxService = sandboxService;
//     }
//     protected parseQueryParams(parseArgs: ISandbox): ISandbox {
//         return parseArgs;
//     }
//     protected processData(parsedData: ISandbox): Promise<ISandbox> {
//         const newParsedData = {
//             title: parsedData.title,
//             body: parsedData.body,
//         };
//         return this.sandboxService.createSandboxEntry(newParsedData);
//     }
//     protected successCode(): number {
//         return 201;
//     }
//     protected successMessage(): string {
//         throw new Error('Failed to create a sandbox entry');
//     }
// }

// export const sanboxCreateController = new SandboxCreateController(
//     new SandboxService(sandboxModel)
// );

export class UserController {
    private readonly sandboxService: SandboxService;

    constructor(sandboxService: SandboxService) {
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

const userController = new UserController(sandboxService);
export default userController;
