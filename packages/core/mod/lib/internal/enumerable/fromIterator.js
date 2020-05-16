import { none } from "../../option.js";
class IteratorEnumerator {
    constructor(iterator) {
        this.iterator = iterator;
        this.current = none;
        this.hasCurrent = false;
    }
    move() {
        this.hasCurrent = false;
        this.current = none;
        const next = this.iterator.next();
        if (!next.done) {
            this.hasCurrent = true;
            this.current = next.value;
        }
        return this.hasCurrent;
    }
}
class IteratorEnumerable {
    constructor(f) {
        this.f = f;
    }
    enumerate() {
        const iterator = this.f();
        const enumerator = new IteratorEnumerator(iterator);
        return enumerator;
    }
}
const _fromIterator = (f) => new IteratorEnumerable(f);
export const fromIterator = () => _fromIterator;
const _fromIterable = (iterable) => _fromIterator(() => iterable[Symbol.iterator]());
export const fromIterable = () => _fromIterable;
