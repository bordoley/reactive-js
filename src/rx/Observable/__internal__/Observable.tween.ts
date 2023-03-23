import { MAX_VALUE } from "../../../__internal__/constants.js";
import { Function1, identity, pipe, returns } from "../../../functions.js";
import { ObservableLike } from "../../../rx.js";
import Observable_generate from "./Observable.generate.js";
import Observable_map from "./Observable.map.js";
import Observable_takeWhile from "./Observable.takeWhile.js";

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
    Observable_generate<[number, number]>(([start, prev], now) => {
      if (start > now) {
        return [now, prev];
      } else {
        const elapsed = now - start;
        const next =
          elapsed > duration
            ? finish
            : prev + (finish - prev) * easing(elapsed / duration);
        return [start, next];
      }
    }, returns([MAX_VALUE, start])),
    Observable_map<ObservableLike, [number, number], number>(
      ([, value]) => value,
    ),
    Observable_takeWhile<number>(value => value !== finish, {
      inclusive: true,
    }),
  );
};

export default Observable_tween;
