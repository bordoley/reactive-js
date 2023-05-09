import Observable_pick from "../../Observable/__internal__/Observable.pick.js";
import Observable_scan from "../../Observable/__internal__/Observable.scan.js";
import Observable_takeWhile from "../../Observable/__internal__/Observable.takeWhile.js";
import { MAX_VALUE } from "../../__internal__/constants.js";
import { min } from "../../__internal__/math.js";
import { RunnableContainer } from "../../containers.js";
import {
  Function1,
  identity,
  isNotEqualTo,
  pipe,
  returns,
} from "../../functions.js";
import { RunnableLike } from "../../types.js";
import Observable_currentTime from "./Runnable.currentTime.js";

const Runnable_keyFrame = (
  duration: number,
  options?: {
    readonly easing?: Function1<number, number>;
  },
): RunnableLike<number> => {
  const { easing = identity } = options ?? {};

  return pipe(
    Observable_currentTime(),
    Observable_scan<RunnableContainer.Type, number, [number, number]>(
      ([startTime, _], now) => {
        startTime = min(now, startTime);

        const elapsed = now - startTime;
        const next = elapsed > duration ? 1 : easing(elapsed / duration);
        return [startTime, next];
      },
      returns([MAX_VALUE, 0]),
    ),
    Observable_pick<RunnableContainer.Type, [unknown, number], 1>(1),
    Observable_takeWhile<RunnableContainer.Type, number>(isNotEqualTo(1), {
      inclusive: true,
    }),
  );
};

export default Runnable_keyFrame;
