import * as express from 'express';
import * as parser from 'body-parser';

const app: express.Application = express();
app.use(parser.json());

app.get('/', (req, res) => {
  res.send({
    message: 'Hello World!',
  });
});

app.listen(3000, () => {
  console.log('Shopping Cart Service started on port 3000!');
});
