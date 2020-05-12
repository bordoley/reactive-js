import { lift } from "./lift.js";
class KeepTypeEnumerator {
    constructor(delegate, predicate) {
        this.delegate = delegate;
        this.predicate = predicate;
    }
    get current() {
        return this.delegate.current;
    }
    get hasCurrent() {
        return this.delegate.hasCurrent;
    }
    move() {
        const delegate = this.delegate;
        while (delegate.move() && !this.predicate(delegate.current)) { }
        return delegate.hasCurrent;
    }
}
export const keepType = (predicate) => {
    const operator = (enumerator) => new KeepTypeEnumerator(enumerator, predicate);
    return lift(operator);
};
export const keep = (predicate) => keepType(predicate);
