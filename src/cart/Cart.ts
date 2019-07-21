import Item from 'item/Item';
import ICart from 'cart/ICart';

class Cart implements ICart {
  items: Item[];

  constructor() {
    this.items = [];
  }

  getAll(): Item[] {
    return this.items;
  }

  add(item: Item): void {
    throw new Error('Method not implemented.');
  }

  remove(itemId: string): void {
    throw new Error('Method not implemented.');
  }

  clear(): void {
    throw new Error('Method not implemented.');
  }

}

export default Cart;
