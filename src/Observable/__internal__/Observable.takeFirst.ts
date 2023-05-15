import type * as Observable from "../../Observable.js";
import Observer_createTakeFirstObserver from "../../Observer/__internal__/Observer.createTakeFirstObserver.js";
import { clampPositiveInteger } from "../../__internal__/math.js";
import { partial, pipe } from "../../functions.js";
import Observable_liftEnumerableUpperBounded from "./Observable.liftEnumerableUpperBounded.js";

const Observable_takeFirst: Observable.Signature["takeFirst"] = (
  options: { readonly count?: number } = {},
) => {
  const count = clampPositiveInteger(options.count ?? 1);
  return pipe(
    Observer_createTakeFirstObserver,
    partial(count),
    Observable_liftEnumerableUpperBounded,
  );
};

export default Observable_takeFirst;
