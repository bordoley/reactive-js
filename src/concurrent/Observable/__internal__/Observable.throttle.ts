import { none, partial, pipe, pipeLazy } from "../../../functions.js";
import type * as Observable from "../../Observable.js";
import Observer_createThrottleObserver from "../../Observer/__internal__/Observer.createThrottleObserver.js";
import Observable_fromIterable from "./Observable.fromIterable.js";
import Observable_liftWithSideEffects from "./Observable.liftWithSideEffects.js";

const Observable_throttle: Observable.Signature["throttle"] = (
  duration: number,
  options: { readonly mode?: "first" | "last" | "interval" } = {},
) => {
  const { mode = "interval" } = options;

  const durationObservable = pipeLazy(
    [none],
    // FIXME: Observable_fromValue
    Observable_fromIterable({ delay: duration, delayStart: true }),
  );

  return pipe(
    Observer_createThrottleObserver,
    partial(durationObservable, mode),
    Observable_liftWithSideEffects,
  );
};

export default Observable_throttle;
