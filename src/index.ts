import 'dotenv/config';
import validateEnv from './utils/validateEnv';
import App from './app';
import { sandboxRouter } from './routes/sandboxRoutes';
import { rootRouter } from './routes/rootRouters';
import { userRouter } from './routes/userRoutes';

validateEnv();

const app = new App(Number(process.env.PORT), [
    sandboxRouter,
    rootRouter,
    userRouter,
]);

app.listen();
