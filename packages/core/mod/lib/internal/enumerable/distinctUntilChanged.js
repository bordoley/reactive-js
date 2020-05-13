import { strictEquality } from "../../functions.js";
import { lift } from "./lift.js";
class DistinctUntilChangedEnumerator {
    constructor(delegate, equality) {
        this.delegate = delegate;
        this.equality = equality;
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
            if (!hadCurrent || !this.equality(prevCurrent, this.delegate.current)) {
                break;
            }
        }
        return this.hasCurrent;
    }
}
export const distinctUntilChanged = (equality = strictEquality) => {
    const operator = (enumerator) => new DistinctUntilChangedEnumerator(enumerator, equality);
    return lift(operator);
};
