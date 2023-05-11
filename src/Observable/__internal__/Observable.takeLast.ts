import type * as Observable from "../../Observable.js";
import Observer_createTakeLastObserver from "../../Observer/__internal__/Observer.createTakeLastObserver.js";
import { clampPositiveInteger } from "../../__internal__/math.js";
import { partial, pipe } from "../../functions.js";
import Observable_liftSource from "./Observable.liftSource.js";

const Observable_takeLast: Observable.Signature["takeLast"] = (
  options: { readonly count?: number } = {},
) => {
  const count = clampPositiveInteger(options.count ?? 1);
  return pipe(
    Observer_createTakeLastObserver,
    partial(count),
    Observable_liftSource,
  );
};

export default Observable_takeLast;
