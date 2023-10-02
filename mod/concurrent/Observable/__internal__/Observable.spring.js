/// <reference types="./Observable.spring.d.ts" />

import { MAX_VALUE } from "../../../__internal__/constants.js";
import { abs, clamp, min } from "../../../__internal__/math.js";
import { pick } from "../../../computations.js";
import { isNotEqualTo, pipe, returns } from "../../../functions.js";
import Observable_currentTime from "./Observable.currentTime.js";
import Observable_map from "./Observable.map.js";
import Observable_scan from "./Observable.scan.js";
import Observable_takeWhile from "./Observable.takeWhile.js";
const Observable_spring = (options) => {
    const stiffness = clamp(0, options?.stiffness ?? 0.15, 1);
    const damping = clamp(0, options?.damping ?? 0.8, 1);
    const precision = clamp(0, options?.precision ?? 0.01, 1);
    return pipe(Observable_currentTime, Observable_scan(([lastTime, last, value], now) => {
        lastTime = min(now, lastTime);
        const delta = 1 - value;
        const elapseTime = now - lastTime;
        const dt = (elapseTime * 60) / 1000;
        const velocity = (value - last) / (dt || 1 / 60);
        const spring = stiffness * delta;
        const damper = damping * velocity;
        const acceleration = spring - damper;
        const d = (velocity + acceleration) * dt;
        const newValue = abs(d) < precision && abs(delta) < precision ? 1 : value + d;
        return [now, value, newValue];
    }, returns([MAX_VALUE, 0, 0])), pick({ map: Observable_map }, 2), Observable_takeWhile(isNotEqualTo(1), {
        inclusive: true,
    }));
};
export default Observable_spring;
