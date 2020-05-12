import { referenceEquals, } from "../../functions.js";
import { enumerate } from "./enumerator.js";
export const someSatisfy = (predicate) => enumerable => {
    const enumerator = enumerate(enumerable);
    while (enumerator.move()) {
        if (predicate(enumerator.current)) {
            return true;
        }
    }
    return false;
};
export const contains = (value, equals = referenceEquals) => someSatisfy((b) => equals(value, b));
