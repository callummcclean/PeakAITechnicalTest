import BoxPacker from '../src/boxPacker/BoxPacker';

describe('Box Packer', () => {
  it('Solves example problem', () => {
    const ids = ['Item1', 'Item2', 'Item3', 'Item4', 'Item5', 'Item6'];
    const weights = [1, 8, 7, 4, 3, 2];
    const days = [4, 1, 2, 10, 3, 5];
    const packer = new BoxPacker(ids, weights, days);
    const result = packer.calculate(10);

    const expected = {
      ids: ['Item2', 'Item1'],
      deliveryDays: 5,
    };

    expect(result).toEqual(expected);
  });

  it('Throws error on invalid input', () => {
    const ids = ['Item1', 'Item2', 'Item3', 'Item4', 'Item5', 'Item6'];
    const weights = [1, 8, 7, 4, 3, 2, 8];
    const days = [4, 1, 2, 10, 3, 5];

    expect(() => {
      const packer = new BoxPacker(ids, weights, days);
    }).toThrow();
  });
});
