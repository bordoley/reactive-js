import { fromIterable as fromIterableEnumerable, fromIterator as fromIteratorEnumerable, } from "../../enumerable.js";
import { fromEnumerable } from "./fromEnumerable.js";
import { pipe } from "../../functions.js";
export const fromIterator = (f) => pipe(f, fromIteratorEnumerable, fromEnumerable);
export const fromIterable = (iterable) => pipe(iterable, fromIterableEnumerable, fromEnumerable);
