import { fromIterator } from "../enumerable.js";
function* iterateSetMultimapValues(multimap) {
    for (const values of multimap.map.values()) {
        for (const value of values) {
            yield value;
        }
    }
}
function* iterateKeyedQueueKeyValuePairs(queue) {
    const map = queue.map;
    for (const key of map.keys()) {
        const values = map.get(key) ?? new Set();
        for (const value of values) {
            yield [key, value];
        }
    }
}
class SetMultimap {
    constructor() {
        this.count = 0;
        this.keys = fromIterator(() => this.map.keys());
        this.map = new Map();
        this.values = fromIterator(() => iterateSetMultimapValues(this));
    }
    add(key, value) {
        const map = this.map;
        const values = map.get(key) ?? new Set();
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
    enumerate() {
        return fromIterator(() => iterateKeyedQueueKeyValuePairs(this)).enumerate();
    }
    get(key) {
        return this.map.get(key) ?? new Set();
    }
    remove(key, value) {
        const map = this.map;
        const values = map.get(key) ?? new Set();
        const valuesOldSize = values.size;
        values.delete(value);
        const valuesNewSize = values.size;
        this.count -= valuesOldSize - valuesNewSize;
        if (valuesNewSize === 0) {
            map.delete(key);
        }
    }
    removeAll(key) {
        const map = this.map;
        const values = map.get(key) ?? new Set();
        const valuesSize = values.size;
        this.count -= valuesSize;
        map.delete(key);
    }
}
export const createSetMultimap = () => new SetMultimap();
