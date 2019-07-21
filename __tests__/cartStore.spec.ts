import Cart from '../src/cart/Cart';
import CartStore from '../src/cartStore/CartStore';
import * as uuid from 'uuid';

describe('Cart Store', () => {

  it('Retrieves added cart', () => {
    const store = new CartStore();
    const cart = new Cart();
    const id = uuid.v4();

    store.add(id, cart);

    const retrievedCart = store.get(id);
    expect(retrievedCart).toBe(cart);
  });

  it('can handle multple carts', () => {
    const store = new CartStore();
    const firstCart = {
      id: uuid.v4(),
      cart: new Cart(),
    };
    const secondCart = {
      id: uuid.v4(),
      cart: new Cart(),
    };

    store.add(firstCart.id, firstCart.cart);
    store.add(secondCart.id, secondCart.cart);

    const retrievedFirstCart = store.get(firstCart.id);
    const retrievedSecondCart = store.get(secondCart.id);

    expect(retrievedFirstCart).toBe(firstCart.cart);
    expect(retrievedSecondCart).toBe(secondCart.cart);
  });

});
