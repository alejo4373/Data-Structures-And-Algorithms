const { Stack } = require('./Stack');

describe('Stack data structure', () => {
  it('Stack methods', () => {
    let testStack = new Stack();
    expect(testStack.isEmpty()).toBeTruthy();
    testStack.push(1)
    expect(testStack.peek()).toBe(1);
    expect(testStack.pop()).toBe(1);
    expect(testStack.isEmpty()).toBeTruthy();
  })
})