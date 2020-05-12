import { referenceEquals } from "../../functions.js";
import { lift } from "./lift.js";
class DistinctUntilChangedEnumerator {
    constructor(delegate, equals) {
        this.delegate = delegate;
        this.equals = equals;
    }
    get current() {
        return this.delegate.current;
    }
    get hasCurrent() {
        return this.delegate.hasCurrent;
    }
    move() {
        const prevCurrent = this.current;
        const hadCurrent = this.hasCurrent;
        while (this.delegate.move()) {
            if (!hadCurrent || !this.equals(prevCurrent, this.delegate.current)) {
                break;
            }
        }
        return this.hasCurrent;
    }
}
export const distinctUntilChanged = (equals = referenceEquals) => {
    const operator = (enumerator) => new DistinctUntilChangedEnumerator(enumerator, equals);
    return lift(operator);
};
