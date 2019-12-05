/** @ignore */
export interface PriorityQueueLike<T> {
  readonly count: number;
  clear(): void;
  peek(): T | undefined;
  pop(): T | undefined;
  push(item: T): void;
}

const computeParentIndex = (index: number) => Math.floor((index - 1) / 2);

class PriorityQueueImpl<T> implements PriorityQueueLike<T> {
  get count(): number {
    return this.values.length;
  }
  private readonly compare: (a: T, b: T) => number;
  private readonly values: Array<T> = [];

  constructor(compare: (a: T, b: T) => number) {
    this.compare = compare;
  }

  clear() {
    this.values.length = 0;
  }

  peek() {
    return this.values[0];
  }

  pop(): T | undefined {
    const { values } = this;
    const length = values.length;
    if (length === 0) {
      return undefined;
    } else if (length === 1) {
      return values.shift();
    } else {
      const first = values[0];
      const last = values.pop() as T;
      values[0] = last;

      this.siftDown(last);

      return first;
    }
  }

  push(item: T) {
    const { values } = this;
    values.push(item);
    this.siftUp(item);
  }

  private siftDown(item: T) {
    const { values, compare } = this;
    const length = values.length;

    for (let index = 0; index < length; ) {
      const leftIndex = (index + 1) * 2 - 1;
      const rightIndex = leftIndex + 1;

      const left = values[leftIndex];
      const right = values[rightIndex];

      if (left !== undefined && compare(left, item) < 0) {
        if (right !== undefined && compare(right, left) < 0) {
          values[index] = right;
          values[rightIndex] = item;
          index = rightIndex;
        } else {
          values[index] = left;
          values[leftIndex] = item;
          index = leftIndex;
        }
      } else if (right !== undefined && compare(right, item) < 0) {
        values[index] = right;
        values[rightIndex] = item;
        index = rightIndex;
      } else {
        break;
      }
    }
  }

  private siftUp(item: T) {
    const { values, compare } = this;

    for (
      let index = values.length - 1,
        parentIndex = computeParentIndex(index),
        parent = values[parentIndex];
      parent !== undefined && compare(parent, item) > 0;
      index = parentIndex,
        parentIndex = computeParentIndex(index),
        parent = values[parentIndex]
    ) {
      values[parentIndex] = item;
      values[index] = parent;
    }
  }
}

/** @ignore */
export const createPriorityQueue = <T>(
  comparator: (a: T, b: T) => number,
): PriorityQueueLike<T> => new PriorityQueueImpl(comparator);
