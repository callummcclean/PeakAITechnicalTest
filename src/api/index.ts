import * as express from 'express';
import * as parser from 'body-parser';
import cartRouter from './routes/cartRouter';

const api: express.Application = express();

api.use(parser.json());

api.use('/carts', cartRouter);

export default api;
