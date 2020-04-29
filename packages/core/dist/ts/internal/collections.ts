import { EnumerableLike } from "../enumerable.ts";

export interface KeyedEnumerableLike<K, V> extends EnumerableLike<[K, V]> {
  readonly keys: EnumerableLike<K>;
  readonly values: EnumerableLike<V>;
}

export interface Collection<T> extends EnumerableLike<T> {
  readonly count: number;
}

export interface KeyedCollection<K, V> extends KeyedEnumerableLike<K, V> {
  readonly count: number;
}
