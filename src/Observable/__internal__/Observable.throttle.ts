import type * as Observable from "../../Observable.js";
import Observer_createThrottleObserver from "../../Observer/__internal__/Observer.createThrottleObserver.js";
import ReadonlyArray_toObservable from "../../ReadonlyArray/__internal__/ReadonlyArray.toObservable.js";
import { none, partial, pipe, pipeLazy } from "../../functions.js";
import {
  ObservableLike_isDeferred,
  ObservableLike_isEnumerable,
  ObservableLike_isRunnable,
} from "../../types.js";
import Observable_liftUpperBoundedBy from "./Observable.liftUpperBoundedBy.js";

const Observable_throttle: Observable.Signature["throttle"] = ((
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
    Observable_liftUpperBoundedBy({
      [ObservableLike_isDeferred]: true,
      [ObservableLike_isEnumerable]: false,
      [ObservableLike_isRunnable]: true,
    }),
  );
}) as Observable.Signature["throttle"];

export default Observable_throttle;
