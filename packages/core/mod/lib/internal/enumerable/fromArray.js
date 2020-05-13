import { none } from "../../option.js";
class ArrayEnumerator {
    constructor(array) {
        this.array = array;
        this.current = none;
        this.hasCurrent = false;
        this.index = -1;
    }
    move() {
        const array = this.array;
        let hasCurrent = false;
        this.index++;
        const index = this.index;
        if (index < array.length) {
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
