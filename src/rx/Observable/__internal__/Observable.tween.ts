import { MAX_VALUE } from "../../../__internal__/constants.js";
import { min } from "../../../__internal__/math.js";
import {
  Function1,
  identity,
  isNotEqualTo,
  pipe,
  returns,
} from "../../../functions.js";
import { RunnableLike } from "../../../rx.js";
import Observable_currentTime from "./Observable.currentTime.js";
import Observable_pick from "./Observable.pick.js";
import Observable_scan from "./Observable.scan.js";
import Observable_takeWhile from "./Observable.takeWhile.js";

const Observable_tween = (
  duration: number,
  options?: {
    readonly easing?: Function1<number, number>;
  },
): RunnableLike<number> => {
  const { easing = identity } = options ?? {};

  return pipe(
    Observable_currentTime(),
    Observable_scan<RunnableLike, number, [number, number]>(
      ([startTime, _], now) => {
        startTime = min(now, startTime);

        const elapsed = now - startTime;
        const next = elapsed > duration ? 1 : easing(elapsed / duration);
        return [startTime, next];
      },
      returns([MAX_VALUE, 0]),
    ),
    Observable_pick<RunnableLike, [unknown, number], 1>(1),
    Observable_takeWhile<RunnableLike, number>(isNotEqualTo(1), {
      inclusive: true,
    }),
  );
};

export default Observable_tween;
