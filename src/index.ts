import 'dotenv/config';
import validateEnv from './utils/validateEnv';
import App from './app';
import { sandboxRouter } from './routes/sandboxRoutes';
import { rootRouter } from './routes/rootRouters';

validateEnv();

const app = new App(Number(process.env.PORT), [sandboxRouter, rootRouter]);

app.listen();
