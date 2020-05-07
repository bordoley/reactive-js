import { lift } from "./lift.js";
import { isNone, none } from "../../option.js";
import { fromArray, empty } from "./fromArray.js";
import { pipe } from "../../functions.js";
class TakeLastEnumerator {
    constructor(delegate, maxCount) {
        this.delegate = delegate;
        this.maxCount = maxCount;
        this.enumerator = none;
    }
    get current() {
        var _a;
        return (_a = this.enumerator) === null || _a === void 0 ? void 0 : _a.current;
    }
    get hasCurrent() {
        var _a, _b;
        return (_b = (_a = this.enumerator) === null || _a === void 0 ? void 0 : _a.hasCurrent) !== null && _b !== void 0 ? _b : false;
    }
    move() {
        const delegate = this.delegate;
        if (isNone(this.enumerator)) {
            const last = [];
            while (delegate.move()) {
                last.push(delegate.current);
                if (last.length > this.maxCount) {
                    last.shift();
                }
            }
            this.enumerator = fromArray(last).enumerate();
        }
        this.enumerator.move();
        return this.hasCurrent;
    }
}
export const takeLast = (count = 1) => {
    const operator = (enumerator) => new TakeLastEnumerator(enumerator, count);
    return observable => (count > 0 ? pipe(observable, lift(operator)) : empty());
};
