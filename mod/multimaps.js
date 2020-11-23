'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var functions = require('./functions.js');
require('./option.js');
require('./readonlyArray.js');
var enumerable = require('./enumerable.js');
require('./runnable.js');

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
        this.keys = enumerable.fromIterator()(() => this.map.keys());
        this.map = new Map();
        this.values = enumerable.fromIterator()(functions.defer(this, iterateSetMultimapValues));
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
        return functions.pipe(functions.defer(this, iterateKeyedQueueKeyValuePairs), enumerable.fromIterator(), enumerable.enumerate);
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
const createSetMultimap = () => new SetMultimap();

exports.createSetMultimap = createSetMultimap;
