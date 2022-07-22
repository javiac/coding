export class InterleaveIterator {
  private queue: { value: number; iterator: Iterator<number> }[] = [];

  constructor(iterList: Iterator<number>[]) {
    for (const iterator of iterList) {
      const item = iterator.next();
      if (item.value !== undefined) {
        this.queue.unshift({ value: item.value, iterator });
      }
    }
  }

  public next() {
    if (!this.hasNext()) {
      return undefined;
    }

    const { value, iterator } = this.queue.pop()!;

    const nextValue = iterator.next();
    if (nextValue.value !== undefined) {
      this.queue.unshift({ value: nextValue.value, iterator });
    }

    return value;
  }

  public hasNext() {
    return this.queue.length > 0;
  }
}
