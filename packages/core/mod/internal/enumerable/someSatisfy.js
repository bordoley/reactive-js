import { referenceEquals } from "../../functions.js";
export const someSatisfy = (predicate) => enumerable => {
    const enumerator = enumerable.enumerate();
    while (enumerator.move()) {
        if (predicate(enumerator.current)) {
            return true;
        }
    }
    return false;
};
export const contains = (value, equals = referenceEquals) => someSatisfy((b) => equals(value, b));
