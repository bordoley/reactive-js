import { none } from "../../option.js";
class ArrayEnumerator {
    constructor(array, index) {
        this.array = array;
        this.index = index;
        this.current = none;
        this.hasCurrent = false;
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
    constructor(values, startIndex) {
        this.values = values;
        this.startIndex = startIndex;
    }
    enumerate() {
        return new ArrayEnumerator(this.values, this.startIndex);
    }
}
export const fromArray = ({ startIndex } = { startIndex: 0 }) => (values) => new ArrayEnumerable(values, startIndex - 1);
const _empty = fromArray()([]);
export const empty = () => _empty;
