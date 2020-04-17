import { EnumerableLike, fromIterator } from "@reactive-js/enumerable";
import { Option } from "@reactive-js/option";
import { KeyedQueueLike } from "./interfaces";

function* iterateKeyedQueueValues<K, V>(queue: KeyedQueue<K, V>) {
  for (const values of queue.map.values()) {
    for (const value of values) {
      yield value;
    }
  }
}

class KeyedQueue<K, V> implements KeyedQueueLike<K, V> {
  count = 0;
  readonly map: Map<K, V[]> = new Map();

  readonly values: EnumerableLike<void, V> = fromIterator(() =>
    iterateKeyedQueueValues(this),
  );

  clear() {
    this.map.clear();
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
