import { lift } from "./lift.js";
class TakeFirstEnumerator {
    constructor(delegate, maxCount) {
        this.delegate = delegate;
        this.maxCount = maxCount;
        this.count = 0;
        this.hasCurrent = false;
    }
    get current() {
        return this.delegate.current;
    }
    move() {
        this.hasCurrent = false;
        if (this.count < this.maxCount && this.delegate.move()) {
            this.count++;
            this.hasCurrent = this.delegate.hasCurrent;
        }
        return this.hasCurrent;
    }
}
export const takeFirst = (count = 1) => {
    const operator = (enumerator) => new TakeFirstEnumerator(enumerator, count);
    return lift(operator);
};
