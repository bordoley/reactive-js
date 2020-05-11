import { EnumerableLike, fromIterator, EnumeratorLike, enumerate } from "../enumerable.ts";
import { Option } from "../option.ts";
import { KeyedCollection } from "./collections.ts";
import { bind, pipe } from "../functions.ts";

export interface KeyedQueueLike<K, V> extends KeyedCollection<K, V> {
  clear(): void;
  peek(key: K): Option<V>;
  pop(key: K): Option<V>;
  push(key: K, value: V): void;
}

function* iterateKeyedQueueValues<K, V>(queue: KeyedQueue<K, V>) {
  for (const values of queue.map.values()) {
    for (const value of values) {
      yield value;
    }
  }
}

function* iterateKeyedQueueKeyValuePairs<K, V>(
  queue: KeyedQueue<K, V>,
): Generator<[K, V]> {
  const map = queue.map;
  for (const key of map.keys()) {
    const values = map.get(key) ?? [];
    for (const value of values) {
      yield [key, value];
    }
  }
}

class KeyedQueue<K, V> implements KeyedQueueLike<K, V> {
  count = 0;

  readonly keys: EnumerableLike<K> = fromIterator(() => this.map.keys());

  readonly map: Map<K, V[]> = new Map();

  readonly values: EnumerableLike<V> = fromIterator(bind(iterateKeyedQueueValues, this));

  clear() {
    this.map.clear();
  }

  enumerate(): EnumeratorLike<[K, V]> {
    return pipe(
      bind(iterateKeyedQueueKeyValuePairs, this),
      fromIterator,
      enumerate,
    );
  }

  peek(key: K): Option<V> {
    const map = this.map;
    const values = map.get(key) ?? [];
    return values[0];
  }

  pop(key: K): Option<V> {
    const map = this.map;
    const values = map.get(key) ?? [];
    const valuesOldSize = values.length;
    const result = values.shift();
    const valuesNewSize = values.length;

    this.count -= valuesOldSize - valuesNewSize;

    if (valuesNewSize === 0) {
      map.delete(key);
    }
    return result;
  }

  push(key: K, value: V) {
    const map = this.map;
    const values = map.get(key) ?? [];
    const valuesOldSize = values.length;
    values.push(value);
    const valuesNewSize = values.length;
    this.count += valuesNewSize - valuesOldSize;

    if (valuesOldSize === 0) {
      map.set(key, values);
    }
  }
}

export const createKeyedQueue = <K, V>(): KeyedQueueLike<K, V> =>
  new KeyedQueue();
