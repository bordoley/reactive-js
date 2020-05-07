import { none } from "../../option.js";
import { AbstractDisposable } from "../../disposable.js";
import { lift } from "./lift.js";
class KeepTypeEnumerator extends AbstractDisposable {
    constructor(delegate, predicate) {
        super();
        this.delegate = delegate;
        this.predicate = predicate;
        this.current = none;
        this.hasCurrent = false;
    }
    move() {
        this.hasCurrent = false;
        this.current = none;
        while (this.delegate.move() && !this.predicate(this.delegate.current)) { }
        const hasCurrent = this.delegate.hasCurrent;
        this.hasCurrent = hasCurrent;
        this.current = this.delegate.current;
        return hasCurrent;
    }
}
export const keepType = (predicate) => {
    const operator = (enumerator) => new KeepTypeEnumerator(enumerator, predicate);
    operator.isSynchronous = true;
    return lift(operator);
};
export const keep = (predicate) => keepType(predicate);
