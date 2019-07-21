import { Request, Response } from 'express';
import CartStore from '../../../cartStore/CartStore';

const clearCart = (req: Request, res: Response) => {
  const cartStore = CartStore.getInstance();
  const cart = cartStore.get(req.params.cartId);

  if (!cart) {
    res.send({
      massage: 'Cart ID does not exist.',
    });
  }

  cart.clear();
  const items = cart.getAll();

  res.send(items);
};

export default clearCart;
