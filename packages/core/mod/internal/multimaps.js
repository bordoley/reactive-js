import { fromIterator } from "../enumerable.js";
import { bind } from "../functions.js";
function* iterateSetMultimapValues(multimap) {
    for (const values of multimap.map.values()) {
        for (const value of values) {
            yield value;
        }
    }
}
function* iterateKeyedQueueKeyValuePairs(queue) {
    var _a;
    const map = queue.map;
    for (const key of map.keys()) {
        const values = (_a = map.get(key)) !== null && _a !== void 0 ? _a : new Set();
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
        this.values = fromIterator(bind(iterateSetMultimapValues, this));
    }
    add(key, value) {
        var _a;
        const map = this.map;
        const values = (_a = map.get(key)) !== null && _a !== void 0 ? _a : new Set();
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
        return fromIterator(bind(iterateKeyedQueueKeyValuePairs, this)).enumerate();
    }
    get(key) {
        var _a;
        return (_a = this.map.get(key)) !== null && _a !== void 0 ? _a : new Set();
    }
    remove(key, value) {
        var _a;
        const map = this.map;
        const values = (_a = map.get(key)) !== null && _a !== void 0 ? _a : new Set();
        const valuesOldSize = values.size;
        values.delete(value);
        const valuesNewSize = values.size;
        this.count -= valuesOldSize - valuesNewSize;
        if (valuesNewSize === 0) {
            map.delete(key);
        }
    }
    removeAll(key) {
        var _a;
        const map = this.map;
        const values = (_a = map.get(key)) !== null && _a !== void 0 ? _a : new Set();
        const valuesSize = values.size;
        this.count -= valuesSize;
        map.delete(key);
    }
}
export const createSetMultimap = () => new SetMultimap();
