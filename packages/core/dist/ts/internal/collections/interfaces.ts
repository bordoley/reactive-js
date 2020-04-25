import { EnumerableLike } from "../../enumerable.ts";
import { Option } from "../../option.ts";

export interface KeyedEnumerableLike<K, V> extends EnumerableLike<[K,V]> {
  readonly keys: EnumerableLike<K>;
  readonly values: EnumerableLike<V>;
}

export interface Collection<T> extends EnumerableLike<T> {
  readonly count: number;
}

export interface KeyedCollection<K, V> extends KeyedEnumerableLike<K,V> {
  readonly count: number;
}

export interface KeyedQueueLike<K, V> extends KeyedCollection<K,V> {
  clear(): void;
  peek(key: K): Option<V>;
  pop(key: K): Option<V>;
  push(key: K, value: V): void;
}

export interface QueueLike<T> extends Collection<T> {
  clear(): void;
  peek(): Option<T>;
  pop(): Option<T>;
  push(item: T): void;
}

export interface SetMultimapLike<K, V> extends KeyedCollection<K,V> {
  add(key: K, value: V): void;
  clear(): void;
  get(key: K): ReadonlySet<V>;
  remove(key: K, value: V): void;
  removeAll(key: K): void;
}
