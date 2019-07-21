import * as express from 'express';
import * as parser from 'body-parser';
import cartRouter from './routes/cartRouter';
import packageRouter from './routes/packageRouter';

const api: express.Application = express();

api.use(parser.json());

api.use('/carts', cartRouter);
api.use('/package', packageRouter);

export default api;
