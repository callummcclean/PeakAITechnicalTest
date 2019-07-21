import * as express from 'express';
import * as parser from 'body-parser';
import * as uuid from 'uuid';

import Cart from './cart/Cart';
import Item from './item/Item';
import CartStore from './cartStore/CartStore';
import ICartStore from './cartStore/ICartStore';

const app: express.Application = express();
app.use(parser.json());

const cartStore: ICartStore = new CartStore();

// create a new cart
app.get('/carts', (req: express.Request, res: express.Response) => {
  const id = uuid.v4();
  const cart = new Cart();

  cartStore.add(id, cart);

  res.send({ id });
});

// add items to cart
app.post('/carts/:cartId/items', (req: express.Request, res: express.Response) => {
  const cart = cartStore.get(req.params.cartId);
  const item = req.body as Item;

  cart.add(item);
  const items = cart.getAll();

  res.send(items);
});

// list all items
app.get('/carts/:cartId/items', (req: express.Request, res: express.Response) => {
  const cart = cartStore.get(req.params.cartId);
  const items = cart.getAll();

  res.send(items);
});

// remove item from cart
app.delete('/carts/:cartId/items/:itemId', (req: express.Request, res: express.Response) => {
  const cart = cartStore.get(req.params.cartId);

  cart.remove(req.params.itemId);
  const items = cart.getAll();

  res.send(items);
});

// clear cart
app.delete('/carts/:cartId/items', (req: express.Request, res: express.Response) => {
  const cart = cartStore.get(req.params.cartId);

  cart.clear();
  const items = cart.getAll();

  res.send(items);
});

app.listen(3000, () => {
  console.log('Shopping Cart Service started on port 3000!');
});
