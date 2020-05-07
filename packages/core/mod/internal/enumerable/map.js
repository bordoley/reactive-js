import { AbstractDisposable } from "../../disposable.js";
import { none } from "../../option.js";
import { lift } from "./lift.js";
class MapEnumerator extends AbstractDisposable {
    constructor(delegate, mapper) {
        super();
        this.delegate = delegate;
        this.mapper = mapper;
        this.current = none;
        this.hasCurrent = false;
    }
    move() {
        this.current = none;
        this.delegate.move();
        const hasCurrent = this.delegate.hasCurrent;
        this.hasCurrent = hasCurrent;
        if (this.hasCurrent) {
            this.current = this.mapper(this.delegate.current);
        }
        return hasCurrent;
    }
}
export const map = (mapper) => {
    const operator = (enumerator) => new MapEnumerator(enumerator, mapper);
    return lift(operator);
};
