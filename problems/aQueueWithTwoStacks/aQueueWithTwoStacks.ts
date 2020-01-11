import { Stack } from '../../stacks/Stack';

class QueueUsingStacks {
  incoming: Stack = new Stack();
  outgoing: Stack = new Stack();

  enqueue(item: any): void {
    this.incoming.push(item);
  }

  dequeue(): any {
    if (this.isEmpty()) {
      throw new Error('Nothing to dequeue. Queue is empty')
    }

    if (this.outgoing.isEmpty()) {
      // pass everything from incoming to outgoing
      while (!this.incoming.isEmpty()) {
        this.outgoing.push(this.incoming.pop())
      }
    }

    return this.outgoing.pop();
  }

  peak(): any {
    if (this.isEmpty()) {
      throw new Error('Cannot peek. Queue is empty')
    }

    if (this.outgoing.isEmpty()) {
      // pass everything from incoming to outgoing
      while (!this.incoming.isEmpty()) {
        this.outgoing.push(this.incoming.pop())
      }
    }

    return this.outgoing.peek();
  }

  isEmpty(): boolean {
    return this.incoming.isEmpty() && this.outgoing.isEmpty();
  }
}

export default QueueUsingStacks;
