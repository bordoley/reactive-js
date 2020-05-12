import { fromIterable as fromIterableEnumerable } from "../../enumerable.js";
import { fromEnumerable } from "./fromEnumerable.js";
export const fromIterable = (iterable) => fromEnumerable(fromIterableEnumerable(iterable));
