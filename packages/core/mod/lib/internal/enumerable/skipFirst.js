import { lift } from "./lift.js";
class SkipFirstEnumerator {
    constructor(delegate, skipCount) {
        this.delegate = delegate;
        this.skipCount = skipCount;
        this.count = 0;
    }
    get current() {
        return this.delegate.current;
    }
    get hasCurrent() {
        return this.delegate.hasCurrent;
    }
    move() {
        const skipCount = this.skipCount;
        for (let count = this.count; count < skipCount; count++) {
            if (!this.delegate.move()) {
                break;
            }
        }
        this.count = skipCount;
        return this.delegate.move();
    }
}
export const skipFirst = (count = 1) => {
    const operator = (enumerator) => new SkipFirstEnumerator(enumerator, count);
    return lift(operator);
};
