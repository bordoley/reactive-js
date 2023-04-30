/// <reference types="./Observable.spring.d.ts" />

import { MAX_VALUE, __DEV__ } from "../../../__internal__/constants.js";
import { abs, min } from "../../../__internal__/math.js";
import { isNotEqualTo, pipe, returns } from "../../../functions.js";
import Observable_currentTime from "./Observable.currentTime.js";
import Observable_pick from "./Observable.pick.js";
import Observable_scan from "./Observable.scan.js";
import Observable_takeWhile from "./Observable.takeWhile.js";
const Observable_spring = (options) => {
    const { stiffness = 0.15, damping = 0.8, precision = 0.01 } = options ?? {};
    if (__DEV__) {
        // FIXME: Validate stiffness, damping, precision are within range.
    }
    return pipe(Observable_currentTime(), Observable_scan(([lastTime, last, value], now) => {
        lastTime = min(now, lastTime);
        const delta = 1 - value;
        // FIXME: This caps the elapsed time at roughly the upper bound of the
        // observed frame rate delta, but it only work at 60fps.
        // It would be better to record the actual frame rate and cap accordingly.
        // The intent here is to prevent overshooting when the animation paused by
        // the scheduler.
        const elapseTime = min(now - lastTime, 20);
        const dt = (elapseTime * 60) / 1000;
        const velocity = (value - last) / (dt || 1 / 60);
        const spring = stiffness * delta;
        const damper = damping * velocity;
        const acceleration = spring - damper;
        const d = (velocity + acceleration) * dt;
        const newValue = abs(d) < precision && abs(delta) < precision ? 1 : value + d;
        return [now, value, newValue];
    }, returns([MAX_VALUE, 0, 0])), Observable_pick(2), Observable_takeWhile(isNotEqualTo(1), {
        inclusive: true,
    }));
};
export default Observable_spring;
