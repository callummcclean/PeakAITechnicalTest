import Cart from '../src/cart/Cart';
import Item from '../src/item/Item';

describe('Shopping Cart', () => {
  it('Create new cart returns list of 0 items', () => {
    const cart = new Cart();
    const itemsList = cart.getAll();

    expect(itemsList).toEqual([]);
  });

  it('Add Item, get all returns item', () => {
    const cart = new Cart();
    const item: Item = {
      id: '1',
      name: 'Test Item',
      price: 10,
    };

    cart.add(item);
    const itemsList = cart.getAll();

    expect(itemsList).toEqual([item]);
  });

  it('Add multiple items, get all returns items', () => {
    const cart = new Cart();
    const firstItem: Item = {
      id: '1',
      name: 'Test Item',
      price: 10,
    };
    const secondItem: Item = {
      id: '2',
      name: 'Test Item 2',
      price: 15,
    };

    cart.add(firstItem);
    cart.add(secondItem);
    const itemsList = cart.getAll();

    expect(itemsList).toEqual([firstItem, secondItem]);
  });

});
