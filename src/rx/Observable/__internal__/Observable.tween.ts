import Optional_toObservable from "../../../containers/Optional/__internal__/Optional.toObservable.js";
import { Function1, pipe, returns } from "../../../functions.js";
import { ObservableLike } from "../../../rx.js";
import Observable_scanTweening from "./Observable.scanTweening.js";

const Observable_tween = (
  start: number,
  finish: number,
  options?: {
    delay?: number;
    duration?: number;
    easing?: Function1<number, number>;
  },
): ObservableLike<number> =>
  pipe(
    finish,
    Optional_toObservable(options),
    Observable_scanTweening(returns(start), options),
  );

export default Observable_tween;
