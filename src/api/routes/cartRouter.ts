import { Router } from 'express';
import { createCart, addToCart, listCart, clearCart, removeFromCart } from '../controllers/cart';

const cartRouter = Router();

cartRouter.get('/', createCart);
cartRouter.post('/:cartId/items', addToCart);
cartRouter.get('/:cartId/items', listCart);
cartRouter.delete('/:cartId/items', clearCart);
cartRouter.delete('/:cartId/items/:itemId', removeFromCart);

export default cartRouter;
