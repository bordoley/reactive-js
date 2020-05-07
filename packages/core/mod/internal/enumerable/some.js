import { referenceEquals } from "../../functions.js";
export const some = (predicate) => enumerable => {
    const enumerator = enumerable.enumerate();
    while (enumerator.move()) {
        if (predicate(enumerator.current)) {
            return true;
        }
    }
    return false;
};
export const contains = (value, equals = referenceEquals) => some((b) => equals(value, b));
