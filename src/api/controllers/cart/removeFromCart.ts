import { Request, Response } from 'express';
import CartStore from '../../../cartStore/CartStore';
import Item from '../../../item/Item';

const removeFromCart = (req: Request, res: Response) => {
  const cartStore = CartStore.getInstance();
  const cart = cartStore.get(req.params.cartId);

  if (!cart) {
    throw new Error('Cart ID does not exist.');
  }

  cart.remove(req.params.itemId);
  const items = cart.getAll();

  res.send(items);
};

export default removeFromCart;
