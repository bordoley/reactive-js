import { fromIterable as fromIterableEnumerable } from "../../enumerable.js";
import { fromEnumerable } from "./fromEnumerable.js";
import { pipe } from "../../functions.js";
const _fromIterable = (iterable) => pipe(iterable, fromIterableEnumerable(), fromEnumerable());
export const fromIterable = () => _fromIterable;
