import { none } from "../../option.js";
import { lift } from "./lift.js";
class MapEnumerator {
    constructor(delegate, mapper) {
        this.delegate = delegate;
        this.mapper = mapper;
        this.current = none;
    }
    get hasCurrent() {
        return this.delegate.hasCurrent;
    }
    move() {
        this.current = none;
        this.delegate.move();
        const hasCurrent = this.hasCurrent;
        if (hasCurrent) {
            this.current = this.mapper(this.delegate.current);
        }
        return hasCurrent;
    }
}
export const map = (mapper) => {
    const operator = (enumerator) => new MapEnumerator(enumerator, mapper);
    return lift(operator);
};
