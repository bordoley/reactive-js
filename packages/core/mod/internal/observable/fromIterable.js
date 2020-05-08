import { fromIterable as enumerableFromIterable, fromIterator as enumerableFromIterator, } from "../../enumerable.js";
import { fromEnumerable } from "./fromEnumerable.js";
import { compose } from "../../functions.js";
export const fromIterator = (config = { delay: 0 }) => {
    const call = fromEnumerable(config);
    return compose(enumerableFromIterator, call);
};
export const fromIterable = (config = { delay: 0 }) => {
    const call = fromEnumerable(config);
    return compose(enumerableFromIterable, call);
};
