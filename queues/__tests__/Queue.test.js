const { Queue } = require('../Queue');
let testQueue;

describe('Queue data structure', () => {
  beforeEach(() => {
    testQueue = new Queue(0)
    for (let i = 1; i < 11; i++) {
      testQueue.enqueue(i)
    }
  })

  it('10 elements were enqueued ', () => {
    expect(testQueue.printHumanReadable()).toBe('<=0,1,2,3,4,5,6,7,8,9,10<=');
    expect(testQueue.peek().data).toBe(0);
  })

  it('Dequeues 5 elements', () => {
    let lastDequeued;
    for(let i = 1; i < 6; i++) {
      lastDequeued = testQueue.dequeue()
    }
    expect(lastDequeued.data).toBe(4);
    expect(testQueue.printHumanReadable()).toBe('<=5,6,7,8,9,10<=');
  })

  it('empties the queue', () => {
    while(!testQueue.isEmpty()) {
      testQueue.dequeue()
    }
    expect(testQueue.isEmpty).toBeTruthy();
    expect(() => testQueue.printHumanReadable()).toThrow('Error empty list. Nothing to print')
  })
})