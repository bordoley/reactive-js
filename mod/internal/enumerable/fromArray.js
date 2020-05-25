import { none } from "../../option.js";
class ArrayEnumerator {
    constructor(array, index, endIndex) {
        this.array = array;
        this.index = index;
        this.endIndex = endIndex;
        this.current = none;
        this.hasCurrent = false;
    }
    move() {
        const array = this.array;
        let hasCurrent = false;
        this.index++;
        const index = this.index;
        if (index < this.endIndex) {
            hasCurrent = true;
            this.hasCurrent = true;
            this.current = array[index];
        }
        else {
            this.hasCurrent = false;
        }
        return hasCurrent;
    }
}
class ArrayEnumerable {
    constructor(values, startIndex, endIndex) {
        this.values = values;
        this.startIndex = startIndex;
        this.endIndex = endIndex;
    }
    enumerate() {
        return new ArrayEnumerator(this.values, this.startIndex, this.endIndex);
    }
}
export const fromArray = (options = {}) => (values) => {
    var _a, _b;
    const valuesLength = values.length;
    const startIndex = Math.min((_a = options.startIndex) !== null && _a !== void 0 ? _a : 0, valuesLength);
    const endIndex = Math.max(Math.min((_b = options.endIndex) !== null && _b !== void 0 ? _b : values.length, valuesLength), 0);
    return new ArrayEnumerable(values, startIndex - 1, endIndex);
};
const _empty = fromArray()([]);
export const empty = () => _empty;
