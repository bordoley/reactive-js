import { lift } from "./lift.js";
class ScanEnumerator {
    constructor(delegate, reducer, current) {
        this.delegate = delegate;
        this.reducer = reducer;
        this.current = current;
    }
    get hasCurrent() {
        return this.delegate.hasCurrent;
    }
    move() {
        const delegate = this.delegate;
        if (delegate.move()) {
            this.current = this.reducer(this.current, this.delegate.current);
        }
        return this.hasCurrent;
    }
}
export const scan = (reducer, initialValue) => {
    const operator = (subscriber) => new ScanEnumerator(subscriber, reducer, initialValue());
    return lift(operator);
};
