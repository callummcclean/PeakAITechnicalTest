import ICart from 'cart/ICart';

interface ICartStore {
  add(id: string, cart: ICart): void;
  get(id: string): ICart;
}

export default ICartStore;
