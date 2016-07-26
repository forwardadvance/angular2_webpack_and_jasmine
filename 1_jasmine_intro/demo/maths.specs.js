'use strict';

describe( 'working tests', () => {
  it( 'should work', () => {
    expect(true).toBe(true);
  });
});

describe('maths', () => {
  describe('sum', () => {
    it(' should add numbers', () => {
      expect(maths.sum(1,1)).toBe(2);
      expect(maths.sum(1,4)).toBe(5);
    } );
    it(' should deal with undefined and not die', () => {
      expect(maths.sum()).toEqual(NaN);
    } );
  })
})
