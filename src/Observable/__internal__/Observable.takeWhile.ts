import Enumerator_takeWhile from "../../Enumerator/__internal__/Enumerator.takeWhile.js";
import type * as Observable from "../../Observable.js";
import Observer_createTakeWhileObserver from "../../Observer/__internal__/Observer.createTakeWhileObserver.js";
import { Predicate, partial, pipe } from "../../functions.js";
import Observable_liftEnumerableUpperBound from "./Observable.liftEnumerableUpperBounded.js";

const Observable_takeWhile: Observable.Signature["takeWhile"] = (<T>(
  predicate: Predicate<T>,
  options: { readonly inclusive?: boolean } = {},
) => {
  const { inclusive = false } = options;
  const op = pipe(
    Observer_createTakeWhileObserver,
    partial(predicate, inclusive),
  );

  return Observable_liftEnumerableUpperBound(
    Enumerator_takeWhile(predicate, options),
    op,
  );
}) as Observable.Signature["takeWhile"];

export default Observable_takeWhile;
