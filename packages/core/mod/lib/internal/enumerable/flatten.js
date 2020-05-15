import { compose } from "../../functions.js";
import { isNone, isSome, none } from "../../option.js";
import { enumerate } from "./enumerator.js";
import { lift } from "./lift.js";
import { map } from "./map.js";
class FlattenEnumerator {
    constructor(delegate) {
        this.delegate = delegate;
        this.current = none;
        this.hasCurrent = false;
        this.enumerator = none;
    }
    move() {
        this.current = none;
        this.hasCurrent = false;
        const delegate = this.delegate;
        if (isNone(this.enumerator) && delegate.move()) {
            this.enumerator = enumerate(delegate.current);
        }
        while (isSome(this.enumerator)) {
            const enumerator = this.enumerator;
            if (enumerator.move()) {
                this.current = enumerator.current;
                this.hasCurrent = true;
                break;
            }
            else if (delegate.move()) {
                this.enumerator = enumerate(delegate.current);
            }
            else {
                this.enumerator = none;
            }
        }
        return this.hasCurrent;
    }
}
const operator = (enumerator) => new FlattenEnumerator(enumerator);
const _flatten = lift(operator);
export const flatten = () => _flatten;
export const concatMap = (mapper) => compose(map(mapper), flatten());
