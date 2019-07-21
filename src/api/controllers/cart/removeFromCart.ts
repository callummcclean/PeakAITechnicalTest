import { Request, Response } from 'express';
import CartStore from '../../../cartStore/CartStore';
import Item from '../../../item/Item';

const removeFromCart = (req: Request, res: Response) => {
  const cartStore = CartStore.getInstance();
  const cart = cartStore.get(req.params.cartId);
  const item = req.body as Item;

  cart.remove(req.params.itemId);
  const items = cart.getAll();

  res.send(items);
};

export default removeFromCart;
