import * as express from 'express';
import api from './api';

const app: express.Application = express();

app.use('/api/v1', api); 

app.listen(3000, () => {
  console.log('Shopping Cart Service started on port 3000!');
});
