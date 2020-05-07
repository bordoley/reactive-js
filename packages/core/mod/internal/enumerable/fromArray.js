import { none } from "../../option.js";
class ArrayEnumerator {
    constructor(array) {
        this.array = array;
        this.current = none;
        this.hasCurrent = false;
        this.index = -1;
    }
    move() {
        this.hasCurrent = false;
        this.current = none;
        this.index++;
        const index = this.index;
        if (index < this.array.length) {
            this.hasCurrent = true;
            this.current = this.array[index];
        }
        return this.hasCurrent;
    }
}
class ArrayEnumerable {
    constructor(values) {
        this.values = values;
    }
    enumerate() {
        return new ArrayEnumerator(this.values);
    }
}
export const fromArray = (values) => new ArrayEnumerable(values);
const _empty = fromArray([]);
export const empty = () => _empty;
