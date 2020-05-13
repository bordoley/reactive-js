import { lift } from "./lift.js";
import { none } from "../../option.js";
class KeepTypeEnumerator {
    constructor(delegate, predicate) {
        this.delegate = delegate;
        this.predicate = predicate;
        this.hasCurrent = false;
        this.current = none;
    }
    move() {
        const delegate = this.delegate;
        const predicate = this.predicate;
        let hasCurrent = false;
        while ((hasCurrent = delegate.move()) && !predicate(delegate.current)) { }
        this.hasCurrent = hasCurrent;
        this.current = delegate.current;
        return hasCurrent;
    }
}
export const keepType = (predicate) => {
    const operator = (enumerator) => new KeepTypeEnumerator(enumerator, predicate);
    return lift(operator);
};
export const keep = (predicate) => keepType(predicate);
