import { abs, clamp } from "../../../math.js";
import { ClockLike_now } from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import { Observable_genPure } from "./Observable.gen.js";

const Observable_spring: Observable.Signature["spring"] = ((options?: {
  readonly stiffness?: number;
  readonly damping?: number;
  readonly precision?: number;
}) => {
  const stiffness = clamp(0, options?.stiffness ?? 0.15, 1);
  const damping = clamp(0, options?.damping ?? 0.8, 1);
  const precision = clamp(0, options?.precision ?? 0.01, 1);

  return Observable_genPure(function* spring(clock) {
    let prevValue = 0;
    let currentValue = 0;
    let prevTime = clock[ClockLike_now];

    while (true) {
      const delta = 1 - currentValue;
      const now = clock[ClockLike_now];
      const elapseTime = now - prevTime;
      prevTime = now;

      const dt = (elapseTime * 60) / 1000;
      const velocity = (currentValue - prevValue) / (dt || 1 / 60);

      const spring = stiffness * delta;
      const damper = damping * velocity;
      const acceleration = spring - damper;
      const d = (velocity + acceleration) * dt;

      prevValue = currentValue;
      currentValue = currentValue + d;

      yield currentValue;

      if (abs(d) < precision && abs(delta) < precision) {
        yield 1;
        break;
      }
    }
  });
}) as Observable.Signature["spring"];

export default Observable_spring;
