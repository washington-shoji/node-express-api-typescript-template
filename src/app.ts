import compression from 'compression';
import cors from 'cors';
import express, { Application, Router } from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import mongoose from 'mongoose';

import ErrorMiddleware from './middleware/error/error.middleware';
import Controller from './interface/controller.interface';
import userController from './features/sandbox/controller/sandboxController.controller';

class App {
    public express: Application;
    public port: number;
    public routes: Router[];

    constructor(port: number, routes: Router[]) {
        this.express = express();
        this.port = port;
        this.routes = routes;

        this.initialiseMiddleware();
        this.initialiseErrorHandling();
        this.initialiseDatabaseConnection();
        this.initialiseRoutes(routes);
    }

    // constructor(port: number, controllers: Controller[]) {
    //     this.express = express();
    //     this.port = port;

    //     this.initialiseMiddleware();
    //     this.initialiseErrorHandling();
    //     this.initialiseDatabaseConnection();

    //     this.initialiseControllers(controllers);
    // }

    private initialiseMiddleware(): void {
        this.express.use(helmet());
        this.express.use(cors());
        this.express.use(morgan('dev'));
        this.express.use(express.json());
        this.express.use(express.urlencoded({ extended: false }));
        this.express.use(compression());
    }

    private initialiseRoutes(routes: express.Router[]) {
        routes.forEach((r) => {
            this.express.use(`/api`, r);
        });
    }

    private initialiseErrorHandling(): void {
        this.express.use(ErrorMiddleware);
    }

    private async initialiseDatabaseConnection(): Promise<void> {
        const { MONGO_USER, MONGO_PASSWORD, MONGO_PATH } = process.env;
        try {
            const database = await mongoose.connect(
                `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}${MONGO_PATH}`
            );
            console.log(`Mongodb ${database.connection.name} Connected`);
        } catch (error) {
            console.log(`Could not connect to database due to Error: ${error}`);
        }
    }

    public listen(): void {
        this.express.listen(this.port, () => {
            console.log(`App listening on the port ${this.port}`);
        });
    }
}

export default App;
