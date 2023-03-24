import { MAX_VALUE, __DEV__ } from "../../../__internal__/constants.js";
import { abs, min } from "../../../__internal__/math.js";
import { pipe, returns } from "../../../functions.js";
import { ObservableLike } from "../../../rx.js";
import Observable_currentTime from "./Observable.currentTime.js";
import Observable_map from "./Observable.map.js";
import Observable_scan from "./Observable.scan.js";
import Observable_takeWhile from "./Observable.takeWhile.js";

const Observable_spring = (
  start: number,
  finish: number,
  options?: {
    stiffness?: number;
    damping?: number;
    precision?: number;
  },
): ObservableLike<number> => {
  const { stiffness = 0.15, damping = 0.8, precision = 0.01 } = options ?? {};

  if (__DEV__) {
    // FIXME: Validate stiffness, damping, precision are within range.
  }

  return pipe(
    Observable_currentTime(),
    Observable_scan<ObservableLike, number, [number, number, number]>(
      ([lastTime, last, value], now) => {
        lastTime = min(now, lastTime);

        const delta = finish - value;
        const dt = ((now - lastTime) * 60) / 1000;
        const velocity = (value - last) / (dt || 1 / 60);

        const spring = stiffness * delta;
        const damper = damping * velocity;
        const acceleration = spring - damper;
        const d = (velocity + acceleration) * dt;

        const newValue =
          abs(d) < precision && abs(delta) < precision ? finish : value + d;

        return [now, value, newValue];
      },
      returns([MAX_VALUE, start, start]),
    ),
    Observable_map<ObservableLike, [number, number, number], number>(
      ([, , value]) => value,
    ),
    Observable_takeWhile<number>(value => value !== finish, {
      inclusive: true,
    }),
  );
};

export default Observable_spring;
