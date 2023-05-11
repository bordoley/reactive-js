import type * as Observable from "../../Observable.js";
import Observer_createKeepObserver from "../../Observer/__internal__/Observer.createKeepObserver.js";
import { Predicate, partial, pipe } from "../../functions.js";
import Observable_liftEnumerableUpperBounded from "./Observable.liftEnumerableUpperBounded.js";

const Observable_keep: Observable.Signature["keep"] = <T>(
  predicate: Predicate<T>,
) =>
  pipe(
    Observer_createKeepObserver,
    partial(predicate),
    Observable_liftEnumerableUpperBounded,
  );

export default Observable_keep;
