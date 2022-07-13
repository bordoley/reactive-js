import { Option, isSome, none } from "../../util/Option";
import {
  Comparator,
  floor,
  getLength,
  newInstance,
} from "../../util/functions";

const computeParentIndex = (index: number) => floor((index - 1) / 2);

const siftDown = <T>(queue: PriorityQueueImpl<T>, item: T) => {
  const { values, compare } = queue;
  const length = getLength(values);

  for (let index = 0; index < length; ) {
    const leftIndex = (index + 1) * 2 - 1;
    const rightIndex = leftIndex + 1;

    const left = values[leftIndex];
    const right = values[rightIndex];

    if (isSome(left) && compare(left, item) < 0) {
      if (isSome(right) && compare(right, left) < 0) {
        values[index] = right;
        values[rightIndex] = item;
        index = rightIndex;
      } else {
        values[index] = left;
        values[leftIndex] = item;
        index = leftIndex;
      }
    } else if (isSome(right) && compare(right, item) < 0) {
      values[index] = right;
      values[rightIndex] = item;
      index = rightIndex;
    } else {
      break;
    }
  }
};

const siftUp = <T>(queue: PriorityQueueImpl<T>, item: T) => {
  const { values, compare } = queue;

  for (
    let index = getLength(values) - 1,
      parentIndex = computeParentIndex(index),
      parent = values[parentIndex];
    isSome(parent) && compare(parent, item) > 0;
    index = parentIndex,
      parentIndex = computeParentIndex(index),
      parent = values[parentIndex]
  ) {
    values[parentIndex] = item;
    values[index] = parent;
  }
};

export interface QueueLike<T> {
  readonly count: number;

  clear(): void;
  peek(): Option<T>;
  pop(): Option<T>;
  push(item: T): void;
}

class PriorityQueueImpl<T> implements QueueLike<T> {
  readonly values: T[] = [];

  constructor(readonly compare: Comparator<T>) {}

  get count(): number {
    return getLength(this.values);
  }

  clear() {
    this.values.length = 0;
  }

  peek() {
    return this.values[0];
  }

  pop() {
    const { values } = this;
    const length = getLength(values);
    if (length === 0) {
      return none;
    } else if (length === 1) {
      return values.shift();
    } else {
      const first = values[0];
      const last = values.pop() as T;
      values[0] = last;

      siftDown(this, last);

      return first;
    }
  }

  push(item: T) {
    const { values } = this;
    values.push(item);
    siftUp(this, item);
  }
}

export const createPriorityQueue = <T>(
  comparator: Comparator<T>,
): QueueLike<T> => newInstance(PriorityQueueImpl, comparator);
