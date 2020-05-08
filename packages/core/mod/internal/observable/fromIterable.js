import { fromIterable as enumerableFromIterable, fromIterator as enumerableFromIterator, } from "../../enumerable.js";
import { fromEnumerable } from "./fromEnumerable.js";
import { compose } from "../../functions.js";
export const fromIterator = (delay = 0) => {
    const call = fromEnumerable(delay);
    return compose(enumerableFromIterator, call);
};
export const fromIterable = (delay = 0) => {
    const call = fromEnumerable(delay);
    return compose(enumerableFromIterable, call);
};
