import { fromIterator } from "../enumerable.js";
function* iterateKeyedQueueValues(queue) {
    for (const values of queue.map.values()) {
        for (const value of values) {
            yield value;
        }
    }
}
function* iterateKeyedQueueKeyValuePairs(queue) {
    const map = queue.map;
    for (const key of map.keys()) {
        const values = map.get(key) ?? [];
        for (const value of values) {
            yield [key, value];
        }
    }
}
class KeyedQueue {
    constructor() {
        this.count = 0;
        this.keys = fromIterator(() => this.map.keys());
        this.map = new Map();
        this.values = fromIterator(() => iterateKeyedQueueValues(this));
    }
    clear() {
        this.map.clear();
    }
    enumerate() {
        return fromIterator(() => iterateKeyedQueueKeyValuePairs(this)).enumerate();
    }
    peek(key) {
        const map = this.map;
        const values = map.get(key) ?? [];
        return values[0];
    }
    pop(key) {
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
    push(key, value) {
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
export const createKeyedQueue = () => new KeyedQueue();
