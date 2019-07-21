import { Request, Response } from 'express';
import CartStore from '../../../cartStore/CartStore';

const listCart = (req: Request, res: Response) => {
  const cartStore = CartStore.getInstance();
  const cart = cartStore.get(req.params.cartId);

  const items = cart.getAll();

  res.send(items);
};

export default listCart;
