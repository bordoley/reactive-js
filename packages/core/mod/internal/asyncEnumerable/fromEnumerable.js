import { withLatestFrom, onNotify, takeWhile, map, compute, } from "../../observable.js";
import { compose } from "../../functions.js";
import { createStreamable } from "../../streamable.js";
export const fromEnumerable = (enumerable) => createStreamable(compose(withLatestFrom(compute()(() => enumerable.enumerate()), (_, enumerator) => enumerator), onNotify(enumerator => enumerator.move()), takeWhile(enumerator => enumerator.hasCurrent), map(enumerator => enumerator.current)));
