import type * as Observable from "../../Observable.js";
import Observer_createThrottleObserver from "../../Observer/__internal__/Observer.createThrottleObserver.js";
import ReadonlyArray_toObservable from "../../ReadonlyArray/__internal__/ReadonlyArray.toObservable.js";
import { none, partial, pipe, pipeLazy } from "../../functions.js";
import Observable_liftRunnableUpperBounded from "./Observable.liftRunnableUpperBounded.js";

const Observable_throttle: Observable.Signature["throttle"] = (
  duration: number,
  options: { readonly mode?: "first" | "last" | "interval" } = {},
) => {
  const { mode = "interval" } = options;

  const durationObservable = pipeLazy(
    [none],
    ReadonlyArray_toObservable({
      delay: duration,
      delayStart: true,
    }),
  );

  return pipe(
    Observer_createThrottleObserver,
    partial(durationObservable, mode),
    Observable_liftRunnableUpperBounded,
  );
};

export default Observable_throttle;
