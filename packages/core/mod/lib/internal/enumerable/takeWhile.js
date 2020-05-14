import { lift } from "./lift.js";
class TakeWhileEnumerator {
    constructor(delegate, predicate, inclusive) {
        this.delegate = delegate;
        this.predicate = predicate;
        this.inclusive = inclusive;
        this.state = 0;
    }
    get current() {
        return this.delegate.current;
    }
    get hasCurrent() {
        return this.state < 2 && this.delegate.hasCurrent;
    }
    move() {
        const delegate = this.delegate;
        const state = this.state;
        if (state === 0 && delegate.move()) {
            const satisfiesPredicate = this.predicate(delegate.current);
            if (!satisfiesPredicate && this.inclusive) {
                this.state++;
            }
            else if (!satisfiesPredicate) {
                this.state = 2;
            }
        }
        else if (state < 2 && this.inclusive) {
            this.state++;
        }
        return this.hasCurrent;
    }
}
export const takeWhile = (predicate, { inclusive } = { inclusive: false }) => {
    const operator = (observer) => new TakeWhileEnumerator(observer, predicate, inclusive);
    return lift(operator);
};
