import type * as Observable from "../../Observable.js";
import Observer_createTakeWhileObserver from "../../Observer/__internal__/Observer.createTakeWhileObserver.js";
import { Predicate, partial, pipe } from "../../functions.js";
import Observable_liftSource from "./Observable.liftSource.js";

const Observable_takeWhile: Observable.Signature["takeWhile"] = <T>(
  predicate: Predicate<T>,
  options: { readonly inclusive?: boolean } = {},
) => {
  const { inclusive = false } = options;
  return pipe(
    Observer_createTakeWhileObserver,
    partial(predicate, inclusive),
    Observable_liftSource,
  );
};

export default Observable_takeWhile;
