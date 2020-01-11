import QueueWithTwoStacks from '../aQueueWithTwoStacks'

describe('A Queue implemented with two stacks under the hood. Should work exactly as a regular Queue', () => {
  it('Elements come out in the same order they went in', () => {
    let q = new QueueWithTwoStacks();
    let nums = [1, 2, 3, 4, 5, 7];
    let out = [];

    for (let num of nums) {
      q.enqueue(num)
    }

    while (!q.isEmpty()) {
      out.push(q.dequeue())
    }

    expect(out).toEqual(nums)
  })

  it('Throws an error when trying to dequeue from empty queue', () => {
    let q = new QueueWithTwoStacks();
    expect(() => q.dequeue()).toThrow('Nothing to dequeue. Queue is empty');
  })
})
