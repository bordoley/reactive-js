import { fromIterable as enumerableFromIterable, fromIterator as enumerableFromIterator, } from "../../enumerable.js";
import { compose } from "../../functions.js";
import { fromEnumerable } from "./fromEnumerable.js";
export const fromIterator = (options) => {
    const call = fromEnumerable(options);
    return compose(enumerableFromIterator(), call);
};
export const fromIterable = (options) => {
    const call = fromEnumerable(options);
    return compose(enumerableFromIterable(), call);
};
