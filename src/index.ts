import * as express from 'express';
import * as parser from 'body-parser';
import * as uuid from 'uuid';

import Cart from './cart/Cart';
import Item from './item/Item';
import ICart from 'cart/ICart';

const app: express.Application = express();
app.use(parser.json());

const cart: ICart = new Cart();

// add items to cart
app.post('/cart/items', (req: express.Request, res: express.Response) => {
  const item = req.body as Item;

  cart.add(item);
  const items = cart.getAll();

  res.send(items);
});

// list all items
app.get('/cart/items', (req: express.Request, res: express.Response) => {
  const items = cart.getAll();

  res.send(items);
});

// remove item from cart
app.delete('/cart/items/:itemId', (req: express.Request, res: express.Response) => {
  const item = req.body as Item;

  cart.remove(req.params.itemId);
  const items = cart.getAll();

  res.send(items);
});

// clear cart
app.delete('/cart/items', (req: express.Request, res: express.Response) => {
  const item = req.body as Item;

  cart.clear();
  const items = cart.getAll();

  res.send(items);
});

app.listen(3000, () => {
  console.log('Shopping Cart Service started on port 3000!');
});
