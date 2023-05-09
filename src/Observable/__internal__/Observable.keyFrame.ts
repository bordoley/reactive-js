import Observable_currentTime from "../../Runnable/__internal__/Runnable.currentTime.js";
import { MAX_VALUE } from "../../__internal__/constants.js";
import { min } from "../../__internal__/math.js";
import {
  Function1,
  identity,
  isNotEqualTo,
  pipe,
  returns,
} from "../../functions.js";
import { RunnableContainer, RunnableLike } from "../../types.js";
import Observable_pick from "./Observable.pick.js";
import Observable_scan from "./Observable.scan.js";
import Observable_takeWhile from "./Observable.takeWhile.js";

const Observable_keyFrame = (
  duration: number,
  options?: {
    readonly easing?: Function1<number, number>;
  },
): RunnableLike<number> => {
  const { easing = identity } = options ?? {};

  return pipe(
    Observable_currentTime(),
    Observable_scan<RunnableContainer, number, [number, number]>(
      ([startTime, _], now) => {
        startTime = min(now, startTime);

        const elapsed = now - startTime;
        const next = elapsed > duration ? 1 : easing(elapsed / duration);
        return [startTime, next];
      },
      returns([MAX_VALUE, 0]),
    ),
    Observable_pick<RunnableContainer, [unknown, number], 1>(1),
    Observable_takeWhile<RunnableContainer, number>(isNotEqualTo(1), {
      inclusive: true,
    }),
  );
};

export default Observable_keyFrame;
