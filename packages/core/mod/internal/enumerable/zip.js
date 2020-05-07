import { none } from "../../option.js";
const moveAll = (enumerators) => {
    for (const enumerator of enumerators) {
        enumerator.move();
    }
};
const enumerate = (enumerable) => enumerable.enumerate();
const current = (enumerator) => enumerator.current;
const hasCurrent = (enumerator) => enumerator.hasCurrent;
const allHaveCurrent = (enumerators) => enumerators.every(hasCurrent);
class ZipEnumerator {
    constructor(enumerators, selector) {
        this.enumerators = enumerators;
        this.selector = selector;
        this.current = none;
        this.hasCurrent = false;
    }
    move() {
        this.current = none;
        this.hasCurrent = false;
        const enumerators = this.enumerators;
        moveAll(enumerators);
        const hasCurrent = allHaveCurrent(enumerators);
        this.hasCurrent = hasCurrent;
        if (hasCurrent) {
            this.current = this.selector(...enumerators.map(current));
        }
        return hasCurrent;
    }
}
export function zipEnumerators(enumerators, selector) {
    return new ZipEnumerator(enumerators, selector);
}
class ZipEnumerable {
    constructor(enumerables, selector) {
        this.enumerables = enumerables;
        this.selector = selector;
    }
    enumerate() {
        return zipEnumerators(this.enumerables.map(enumerate), this.selector);
    }
}
export function zip(enumerables, selector) {
    return new ZipEnumerable(enumerables, selector);
}
