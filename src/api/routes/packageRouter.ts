import { Router } from 'express';
import { findPacking } from '../controllers/package';

const packageRouter = Router();

packageRouter.post('/', findPacking);

export default packageRouter;
