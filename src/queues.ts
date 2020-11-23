import { Collection } from "./collections";
import { Option } from "./option";

export interface QueueLike<T> extends Collection<T> {
  clear(): void;
  peek(): Option<T>;
  pop(): Option<T>;
  push(item: T): void;
}

export { createPriorityQueue } from "./queues/priorityQueue";
export { createUniqueQueue } from "./queues/uniqueQueue";
