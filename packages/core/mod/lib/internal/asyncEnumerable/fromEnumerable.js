import { enumerate, current, hasCurrent, move, } from "../../enumerable.js";
import { compose, defer } from "../../functions.js";
import { withLatestFrom, onNotify, takeWhile, map, compute, } from "../../observable.js";
import { createStreamable } from "../../streamable.js";
const _fromEnumerable = (enumerable) => createStreamable(compose(withLatestFrom(compute()(defer(enumerable, enumerate)), (_, enumerator) => enumerator), onNotify(move), takeWhile(hasCurrent), map(current)));
export const fromEnumerable = () => _fromEnumerable;
