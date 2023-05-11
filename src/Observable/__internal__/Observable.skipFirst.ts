import type * as Observable from "../../Observable.js";
import Observer_createSkipFirstObserver from "../../Observer/__internal__/Observer.createSkipFirstObserver.js";
import { clampPositiveInteger } from "../../__internal__/math.js";

import { partial, pipe } from "../../functions.js";
import { ObservableLike } from "../../types.js";
import Observable_liftEnumerableUpperBounded from "./Observable.liftEnumerableUpperBounded.js";

const Observable_skipFirst: Observable.Signature["skipFirst"] = (<T>(
  options: { readonly count?: number } = {},
) => {
  const count = clampPositiveInteger(options?.count ?? 1);
  const op = pipe(
    Observer_createSkipFirstObserver<T>,
    partial(count),
    Observable_liftEnumerableUpperBounded<T, T>,
  );
  return (obs: ObservableLike<T>) => (count > 0 ? op(obs) : obs);
}) as Observable.Signature["skipFirst"];

export default Observable_skipFirst;
