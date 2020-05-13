import { none } from "../../option.js";
import { lift } from "./lift.js";
class MapEnumerator {
    constructor(delegate, mapper) {
        this.delegate = delegate;
        this.mapper = mapper;
        this.current = none;
        this.hasCurrent = false;
    }
    move() {
        this.current = none;
        const hasCurrent = this.delegate.move();
        this.hasCurrent = hasCurrent;
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
