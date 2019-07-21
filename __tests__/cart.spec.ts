import Cart from '../src/cart/Cart';
import Item from '../src/item/Item';

describe('Shopping Cart', () => {
  it('Create new cart returns list of 0 items', () => {
    const cart = new Cart();
    const itemsList = cart.getAll();

    expect(itemsList).toEqual([]);
  });
});
