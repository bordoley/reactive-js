import { lift } from "./lift.js";
class TakeWhileEnumerator {
    constructor(delegate, predicate) {
        this.delegate = delegate;
        this.predicate = predicate;
        this.done = false;
    }
    get current() {
        return this.delegate.current;
    }
    get hasCurrent() {
        return !this.done && this.delegate.hasCurrent;
    }
    move() {
        const delegate = this.delegate;
        if (!this.done && delegate.move()) {
            this.done = !this.predicate(delegate.current);
        }
        return this.hasCurrent;
    }
}
export const takeWhile = (predicate) => {
    const operator = (subscriber) => new TakeWhileEnumerator(subscriber, predicate);
    return lift(operator);
};
