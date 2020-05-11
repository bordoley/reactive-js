import { alwaysTrue } from "../../functions.js";
import { isNone } from "../../option.js";
import { enumerate } from "./enumerate.js";
class RepeatEnumerator {
    constructor(src, shouldRepeat) {
        this.src = src;
        this.shouldRepeat = shouldRepeat;
        this.count = 0;
        this.enumerator = enumerate(src);
    }
    get current() {
        return this.enumerator.current;
    }
    get hasCurrent() {
        return this.enumerator.hasCurrent;
    }
    move() {
        if (!this.enumerator.move()) {
            this.count++;
            if (this.shouldRepeat(this.count)) {
                this.enumerator = enumerate(this.src);
                this.enumerator.move();
            }
        }
        return this.hasCurrent;
    }
}
class RepeatEnumerable {
    constructor(src, shouldRepeat) {
        this.src = src;
        this.shouldRepeat = shouldRepeat;
    }
    enumerate() {
        return new RepeatEnumerator(this.src, this.shouldRepeat);
    }
}
export function repeat(predicate) {
    const repeatPredicate = isNone(predicate)
        ? alwaysTrue
        : typeof predicate === "number"
            ? (count) => count < predicate
            : (count) => predicate(count);
    return enumerable => new RepeatEnumerable(enumerable, repeatPredicate);
}
