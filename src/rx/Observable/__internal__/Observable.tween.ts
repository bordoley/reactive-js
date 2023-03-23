import Optional_toObservable from "../../../containers/Optional/__internal__/Optional.toObservable.js";
import { Function1, identity, pipe, returns } from "../../../functions.js";
import { ObservableLike } from "../../../rx.js";
import Observable_currentTime from "./Observable.currentTime.js";
import Observable_map from "./Observable.map.js";
import Observable_scanMany from "./Observable.scanMany.js";
import Observable_takeWhile from "./Observable.takeWhile.js";
import Observable_withCurrentTime from "./Observable.withCurrentTime.js";

const Observable_tween = (
  start: number,
  finish: number,
  options?: {
    duration?: number;
    easing?: Function1<number, number>;
  },
): ObservableLike<number> => {
  const { duration = 400, easing = identity } = options ?? {};

  return pipe(
    finish,
    Optional_toObservable(),
    Observable_withCurrentTime<ObservableLike, number, [number, number]>(
      (time, next) => [time, next],
    ),
    Observable_scanMany(
      (prev, [start, next]) =>
        pipe(
          Observable_currentTime(),
          Observable_map<ObservableLike, number, number>(now => {
            const elapsed = now - start;
            return elapsed > duration
              ? next
              : prev + (next - prev) * easing(elapsed / duration);
          }),
          Observable_takeWhile<number>(value => value !== next, {
            inclusive: true,
          }),
        ),
      returns(start),
    ),
  );
};

export default Observable_tween;
