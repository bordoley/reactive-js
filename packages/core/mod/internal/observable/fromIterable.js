import { fromIterable as enumerableFromIterable, fromIterator as enumerableFromIterator, } from "../../enumerable.js";
import { fromEnumerable } from "./fromEnumerable.js";
export const fromIterator = (f, delay = 0) => fromEnumerable(enumerableFromIterator(f), delay);
export const fromIterable = (iterable, delay = 0) => fromEnumerable(enumerableFromIterable(iterable), delay);
