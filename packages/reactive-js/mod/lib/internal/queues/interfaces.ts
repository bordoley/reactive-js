import { Option } from "../../option.ts";
import { Collection } from "../collections.ts";

export interface QueueLike<T> extends Collection<T> {
  clear(): void;
  peek(): Option<T>;
  pop(): Option<T>;
  push(item: T): void;
}
