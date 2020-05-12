import { EnumeratorLike, fromArray, enumerate } from "../../enumerable";
import { Comparator, pipe } from "../../functions";
import { isSome, none } from "../../option";
import { QueueLike } from "./interfaces";

const computeParentIndex = (index: number) => Math.floor((index - 1) / 2);

const siftDown = <T>(queue: PriorityQueueImpl<T>, item: T) => {
  const { values, compare } = queue;
  const length = values.length;

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
    let index = values.length - 1,
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

class PriorityQueueImpl<T> implements QueueLike<T> {
  readonly values: Array<T> = [];

  constructor(readonly compare: Comparator<T>) {}

  get count(): number {
    return this.values.length;
  }

  clear() {
    this.values.length = 0;
  }

  enumerate(): EnumeratorLike<T> {
    return pipe(this.values, fromArray, enumerate);
  }

  peek() {
    return this.values[0];
  }

  pop() {
    const { values } = this;
    const length = values.length;
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
): QueueLike<T> => new PriorityQueueImpl(comparator);
