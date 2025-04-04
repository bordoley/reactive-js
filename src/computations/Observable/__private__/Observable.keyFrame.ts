import { MAX_VALUE } from "../../../__internal__/constants.js";
import {
  Function1,
  Tuple2,
  identity,
  isNotEqualTo,
  pipe,
  returns,
  tuple,
} from "../../../functions.js";
import { min } from "../../../math.js";
import type * as Observable from "../../Observable.js";
import Observable_currentTime from "./Observable.currentTime.js";
import Observable_map from "./Observable.map.js";
import Observable_scan from "./Observable.scan.js";
import Observable_takeWhile from "./Observable.takeWhile.js";

const Observable_keyFrame: Observable.Signature["keyFrame"] = ((
  duration: number,
  options?: {
    readonly easing?: Function1<number, number>;
  },
) => {
  const { easing = identity } = options ?? {};

  return pipe(
    Observable_currentTime,
    Observable_scan<number, Tuple2<number, number>>(
      ([startTime, _], now) => {
        startTime = min(now, startTime);

        const elapsed = now - startTime;
        const next = elapsed > duration ? 1 : easing(elapsed / duration);
        return tuple(startTime, next);
      },
      returns(tuple(MAX_VALUE, 0)),
    ),
    Observable_map((x: Tuple2<number, number>) => x[1]),
    Observable_takeWhile(isNotEqualTo(1), {
      inclusive: true,
    }),
  );
}) as Observable.Signature["keyFrame"];

export default Observable_keyFrame;
