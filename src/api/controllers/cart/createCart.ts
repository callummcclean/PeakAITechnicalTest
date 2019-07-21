import { Request, Response } from 'express';
import CartStore from '../../../cartStore/CartStore';
import Cart from '../../../cart/Cart';
import * as uuid from 'uuid';

const createCart = (req: Request, res: Response) => {
  const cartStore = CartStore.getInstance();
  const id = uuid.v4();
  const cart = new Cart();

  cartStore.add(id, cart);

  res.send({ id });
};

export default createCart;
