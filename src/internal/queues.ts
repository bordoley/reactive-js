import { Option } from "../option";
import { Collection } from "./collections";

export interface QueueLike<T> extends Collection<T> {
  clear(): void;
  peek(): Option<T>;
  pop(): Option<T>;
  push(item: T): void;
}

export { createPriorityQueue } from "./queues/priorityQueue";
export { createUniqueQueue } from "./queues/uniqueQueue";
