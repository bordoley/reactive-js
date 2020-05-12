import { enumerate } from "../../enumerable.js";
import { compose, bind } from "../../functions.js";
import { withLatestFrom, onNotify, takeWhile, map, compute, } from "../../observable.js";
import { createStreamable } from "../../streamable.js";
import { current, hasCurrent, move } from "../../enumerable.js";
export const fromEnumerable = (enumerable) => createStreamable(compose(withLatestFrom(compute()(bind(enumerate, enumerable)), (_, enumerator) => enumerator), onNotify(move), takeWhile(hasCurrent), map(current)));
