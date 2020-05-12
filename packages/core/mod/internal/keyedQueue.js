import { fromIterator, enumerate, } from "../enumerable.js";
import { bind, pipe } from "../functions.js";
function* iterateKeyedQueueValues(queue) {
    for (const values of queue.map.values()) {
        for (const value of values) {
            yield value;
        }
    }
}
function* iterateKeyedQueueKeyValuePairs(queue) {
    var _a;
    const map = queue.map;
    for (const key of map.keys()) {
        const values = (_a = map.get(key)) !== null && _a !== void 0 ? _a : [];
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
        this.values = fromIterator(bind(iterateKeyedQueueValues, this));
    }
    clear() {
        this.map.clear();
    }
    enumerate() {
        return pipe(bind(iterateKeyedQueueKeyValuePairs, this), fromIterator, enumerate);
    }
    peek(key) {
        var _a;
        const map = this.map;
        const values = (_a = map.get(key)) !== null && _a !== void 0 ? _a : [];
        return values[0];
    }
    pop(key) {
        var _a;
        const map = this.map;
        const values = (_a = map.get(key)) !== null && _a !== void 0 ? _a : [];
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
        var _a;
        const map = this.map;
        const values = (_a = map.get(key)) !== null && _a !== void 0 ? _a : [];
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
