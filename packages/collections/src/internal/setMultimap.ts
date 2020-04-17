import { EnumerableLike, fromIterator } from "@reactive-js/enumerable";
import { SetMultimapLike } from "./interfaces";

function* iterateSetMultimapValues<K, V>(multimap: SetMultimap<K, V>) {
  for (const values of multimap.map.values()) {
    for (const value of values) {
      yield value;
    }
  }
}

class SetMultimap<K, V> implements SetMultimapLike<K, V> {
  count = 0;
  readonly map: Map<K, Set<V>> = new Map();
  readonly values: EnumerableLike<void, V> = fromIterator(() =>
    iterateSetMultimapValues(this),
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
