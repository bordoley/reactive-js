import {
  EnumerableLike,
  fromIterator,
  EnumeratorLike,
  enumerate,
} from "../enumerable";
import { defer, pipe } from "../functions";
import { KeyedCollection } from "./collections";

function* iterateSetMultimapValues<K, V>(multimap: SetMultimap<K, V>) {
  for (const values of multimap.map.values()) {
    for (const value of values) {
      yield value;
    }
  }
}

function* iterateKeyedQueueKeyValuePairs<K, V>(
  queue: SetMultimap<K, V>,
): Generator<[K, V]> {
  const map = queue.map;
  for (const key of map.keys()) {
    const values = map.get(key) ?? new Set();
    for (const value of values) {
      yield [key, value];
    }
  }
}

export interface SetMultimapLike<K, V> extends KeyedCollection<K, V> {
  add(key: K, value: V): void;
  clear(): void;
  get(key: K): ReadonlySet<V>;
  remove(key: K, value: V): void;
  removeAll(key: K): void;
}

class SetMultimap<K, V> implements SetMultimapLike<K, V> {
  count = 0;
  readonly keys: EnumerableLike<K> = fromIterator<K>()(() => this.map.keys());
  readonly map: Map<K, Set<V>> = new Map();
  readonly values: EnumerableLike<V> = fromIterator<V>()(
    defer(this, iterateSetMultimapValues),
  );

  add(key: K, value: V) {
    const map = this.map;
    const values = map.get(key) ?? new Set<V>();
    const valuesOldSize = values.size;
    values.add(value);
    const valuesNewSize = values.size;
    this.count += valuesNewSize - valuesOldSize;

    if (valuesOldSize === 0) {
      map.set(key, values);
    }
  }

  clear() {
    this.map.clear();
  }

  enumerate(): EnumeratorLike<[K, V]> {
    return pipe(
      defer(this, iterateKeyedQueueKeyValuePairs),
      fromIterator(),
      enumerate,
    );
  }

  get(key: K): ReadonlySet<V> {
    return this.map.get(key) ?? new Set<V>();
  }

  remove(key: K, value: V) {
    const map = this.map;
    const values = map.get(key) ?? new Set<V>();
    const valuesOldSize = values.size;
    values.delete(value);
    const valuesNewSize = values.size;

    this.count -= valuesOldSize - valuesNewSize;

    if (valuesNewSize === 0) {
      map.delete(key);
    }
  }

  removeAll(key: K) {
    const map = this.map;
    const values = map.get(key) ?? new Set<V>();
    const valuesSize = values.size;
    this.count -= valuesSize;
    map.delete(key);
  }
}

export const createSetMultimap = <K, V>(): SetMultimapLike<K, V> =>
  new SetMultimap();
