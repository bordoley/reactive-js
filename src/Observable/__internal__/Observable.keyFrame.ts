import { MAX_VALUE } from "../../__internal__/constants.js";
import { min } from "../../__internal__/math.js";
import {
  Function1,
  Tuple2,
  identity,
  isNotEqualTo,
  pipe,
  returns,
} from "../../functions.js";
import { RunnableWithSideEffectsLike } from "../../types.js";
import Observable_currentTime from "./Observable.currentTime.js";
import Observable_pick from "./Observable.pick.js";
import Observable_scan from "./Observable.scan.js";
import Observable_takeWhile from "./Observable.takeWhile.js";

const Observable_keyFrame = (
  duration: number,
  options?: {
    readonly easing?: Function1<number, number>;
  },
): RunnableWithSideEffectsLike<number> => {
  const { easing = identity } = options ?? {};

  return pipe(
    Observable_currentTime(),
    Observable_scan<number, Tuple2<number, number>>(([startTime, _], now) => {
      startTime = min(now, startTime);

      const elapsed = now - startTime;
      const next = elapsed > duration ? 1 : easing(elapsed / duration);
      return [startTime, next];
    }, returns([MAX_VALUE, 0])),
    Observable_pick<Tuple2<unknown, number>, 1>(1),
    Observable_takeWhile(isNotEqualTo(1), {
      inclusive: true,
    }),
  );
};

export default Observable_keyFrame;
