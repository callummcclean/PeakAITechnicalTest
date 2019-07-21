import Item from 'item/Item';

interface ICart {
  add(item: Item): void;
  remove(itemId: string): void;
  clear(): void;
  getAll(): Item[];
}

export default ICart;
