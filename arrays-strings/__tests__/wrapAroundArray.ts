import WrapAroundArray from '../problems/wrapAroundArray';

describe('WrapAroundArray', () => {
  it('Filling in the array partially returns correct length', () => {
    let array = new WrapAroundArray(5);
    for(let i = 0; i < 3; i++) {
      array.push(i);
    }
    expect(array.length).toBe(3)
  })

  it('Filling in entire array works as usual', () => {
    let array = new WrapAroundArray(5);
    for(let i = 0; i < 5; i++) {
      array.push(i);
    }
    expect(array.array).toEqual([0,1,2,3,4])
    expect(array.length).toBe(5)
  })

  it('Adding one extra element overwrites first element', () => {
    let array = new WrapAroundArray(5);
    for(let i = 0; i < 6; i++) {
      array.push(i);
    }
    expect(array.array).toEqual([5,1,2,3,4])
    expect(array.length).toBe(5)
  })

  it('Adding double the array limit overwrites all elements', () => {
    let array = new WrapAroundArray(5);
    for(let i = 0; i < 10; i++) {
      array.push(i);
    }
    expect(array.array).toEqual([5,6,7,8,9])
    expect(array.length).toBe(5)
  })
})
