import { enumerate } from "../../enumerable.js";
import { compose, bind } from "../../functions.js";
import { withLatestFrom, onNotify, takeWhile, map, compute, } from "../../observable.js";
import { createStreamable } from "../../streamable.js";
export const fromEnumerable = (enumerable) => createStreamable(compose(withLatestFrom(compute()(bind(enumerate, enumerable)), (_, enumerator) => enumerator), onNotify(enumerator => enumerator.move()), takeWhile(enumerator => enumerator.hasCurrent), map(enumerator => enumerator.current)));
