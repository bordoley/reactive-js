import { EnumerableLike } from "@reactive-js/enumerable";

export interface KeyedQueueLike<K, V> {
  readonly count: number;
  readonly values: EnumerableLike<void, V>;

  clear(): void;
  peek(key: K): V | undefined;
  pop(key: K): V | undefined;
  push(key: K, value: V): void;
}

export interface PriorityQueueLike<T> {
  readonly count: number;
  clear(): void;
  peek(): T | undefined;
  pop(): T | undefined;
  push(item: T): void;
}

export interface SetMultimapLike<K, V> {
  readonly count: number;
  readonly values: EnumerableLike<void, V>;

  add(key: K, value: V): void;
  clear(): void;
  get(key: K): ReadonlySet<V>;
  remove(key: K, value: V): void;
  removeAll(key: K): void;
}
