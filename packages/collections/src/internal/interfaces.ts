import { EnumerableLike } from "@reactive-js/enumerable";
import { Option } from "@reactive-js/option";

export interface KeyedQueueLike<K, V> {
  readonly count: number;
  readonly values: EnumerableLike<V>;

  clear(): void;
  peek(key: K): Option<V>;
  pop(key: K): Option<V>;
  push(key: K, value: V): void;
}

export interface QueueLike<T> {
  readonly count: number;

  clear(): void;
  peek(): Option<T>;
  pop(): Option<T>;
  push(item: T): void;
}

export interface SetMultimapLike<K, V> {
  readonly count: number;
  readonly values: EnumerableLike<V>;

  add(key: K, value: V): void;
  clear(): void;
  get(key: K): ReadonlySet<V>;
  remove(key: K, value: V): void;
  removeAll(key: K): void;
}
