const { mapSome } = require('../src');

describe('mapSome', () => {
  it('should return an array with mapped values that are not null or undefined', () => {
    const data = [1, 2, 3, 4, 5];
    const result = mapSome(data, x => (x % 2 === 0 ? x * 2 : null));
    expect(result).toEqual([4, 8]);
  });

  it('should return an empty array if no items pass the transform', () => {
    const data = [1, 3, 5];
    const result = mapSome(data, x => (x % 2 === 0 ? x * 2 : null));
    expect(result).toEqual([]);
  });

  it('should return an empty array if input array is empty', () => {
    const data = [];
    const result = mapSome(data, x => (x % 2 === 0 ? x * 2 : null));
    expect(result).toEqual([]);
  });
});
