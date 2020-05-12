import { negate, compose } from "../../functions.js";
import { enumerate } from "./enumerator.js";
export const everySatisfy = (predicate) => enumerable => {
    const enumerator = enumerate(enumerable);
    while (enumerator.move()) {
        if (!predicate(enumerator.current)) {
            return false;
        }
    }
    return true;
};
export const noneSatisfy = (predicate) => everySatisfy(compose(predicate, negate));
