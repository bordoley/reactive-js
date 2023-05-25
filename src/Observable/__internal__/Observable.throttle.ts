import type * as Observable from "../../Observable.js";
import Observer_createThrottleObserver from "../../Observer/__internal__/Observer.createThrottleObserver.js";
import { none, partial, pipe, pipeLazy } from "../../functions.js";
import Observable_delay from "./Observable.delay.js";
import Observable_fromValue from "./Observable.fromValue.js";
import Observable_liftRunnableUpperBounded from "./Observable.liftRunnableUpperBounded.js";

const Observable_throttle: Observable.Signature["throttle"] = (
  duration: number,
  options: { readonly mode?: "first" | "last" | "interval" } = {},
) => {
  const { mode = "interval" } = options;

  const durationObservable = pipeLazy(
    none,
    Observable_fromValue(),
    Observable_delay(duration, { delayStart: true }),
  );

  return pipe(
    Observer_createThrottleObserver,
    partial(durationObservable, mode),
    Observable_liftRunnableUpperBounded,
  );
};

export default Observable_throttle;
