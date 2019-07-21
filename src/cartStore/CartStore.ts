import ICart from 'cart/ICart';
import ICartStore from 'cartStore/ICartStore';

class CartStore implements ICartStore {
  carts: Map<string, ICart>;

  constructor() {
    this.carts = new Map();
  }

  add(id: string, cart: ICart): void {
    this.carts.set(id, cart);
  }

  get(id: string): ICart {
    return this.carts.get(id);
  }
}

export default CartStore;
