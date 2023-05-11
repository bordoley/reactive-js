import type * as Observable from "../../Observable.js";
import Observer_createForEachObserver from "../../Observer/__internal__/Observer.createForEachObserver.js";
import { SideEffect1, partial, pipe } from "../../functions.js";
import Observable_liftEnumerableUpperBounded from "./Observable.liftEnumerableUpperBounded.js";

const Observable_forEach: Observable.Signature["forEach"] = <T>(
  effect: SideEffect1<T>,
) =>
  pipe(
    Observer_createForEachObserver,
    partial(effect),
    Observable_liftEnumerableUpperBounded,
  );

export default Observable_forEach;
