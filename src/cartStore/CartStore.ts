import ICart from 'cart/ICart';
import ICartStore from 'cartStore/ICartStore';

class CartStore implements ICartStore {
  private static instance: CartStore;
  carts: Map<string, ICart>;

  private constructor() {
    this.carts = new Map();
  }

  static getInstance() {
    if (!CartStore.instance) {
      CartStore.instance = new CartStore();
    }
    return CartStore.instance;
  }

  add(id: string, cart: ICart): void {
    this.carts.set(id, cart);
  }

  get(id: string): ICart {
    return this.carts.get(id);
  }
}

export default CartStore;
