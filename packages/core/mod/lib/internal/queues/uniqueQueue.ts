import {
  fromIterable,
  toRunnable,
  EnumeratorLike,
  enumerate,
} from "../../enumerable.ts";
import { pipe } from "../../functions.ts";
import { isSome } from "../../option.ts";
import { QueueLike } from "./interfaces.ts";
import { first } from "../../runnable.ts";

class UniqueQueueImpl<T> implements QueueLike<T> {
  readonly values: Set<T> = new Set();

  get count(): number {
    return this.values.size;
  }

  clear() {
    this.values.clear();
  }

  enumerate(): EnumeratorLike<T> {
    return pipe(this.values, fromIterable, enumerate);
  }

  peek() {
    return pipe(this.values, fromIterable, toRunnable(), first);
  }

  pop() {
    const head = this.peek();
    if (isSome(head)) {
      this.values.delete(head);
    }
    return head;
  }

  push(item: T) {
    if (!this.values.has(item)) {
      this.values.add(item);
    }
  }
}

export const createUniqueQueue = <T>(): QueueLike<T> => new UniqueQueueImpl();
