'use strict';

describe('working tests', () => {
  it('should work', () => {
    var x = [1,2,3]
    expect(x instanceof Array).toEqual(true);
    expect(x.length).toBeDefined();
    expect(x.length).toBe(3);
  })
})

describe('maths', () => {
  describe('sum', () => {
    it('should add two numbers', () => {
      expect(maths.sum(2,4)).toBe(6);
      expect(maths.sum(1,9)).toBe(10);
    })
    it('should deal with undefined', () => {
      expect(maths.sum()).toEqual(NaN);
    })
  })

  describe('subtract', () => {
    it('should subtract two numbers', () => {
      expect(maths.subtract(2,1)).toBe(1);
      expect(maths.subtract(10,20)).toBe(-10);
    })
  })
});

var x = {a:1, b:2}

























// Goal State

// describe( 'working tests', () => {
//   it( 'should work', () => {
//     expect(true).toBe(true);
//   });
// });

// describe('maths', () => {
//   describe('sum', () => {
//     it(' should add numbers', () => {
//       expect(maths.sum(1,1)).toBe(2);
//       expect(maths.sum(1,4)).toBe(5);
//     } );
//     it(' should deal with undefined and not die', () => {
//       expect(maths.sum()).toEqual(NaN);
//     } );
//   })
// })
