import Optional_toObservable from "../../../containers/Optional/__internal__/Optional.toObservable.js";
import { Function1, pipe } from "../../../functions.js";
import { ObservableLike } from "../../../rx.js";
import Observable_scanTweening from "./Observable.scanTweening.js";

const Observable_tween = (
  start: number,
  finish: number,
  options?: {
    duration?: number;
    easing?: Function1<number, number>;
  },
): ObservableLike<number> =>
  pipe(
    finish,
    Optional_toObservable(),
    Observable_scanTweening(start, options),
  );

export default Observable_tween;
