/// <reference types="./Observable.keyFrame.d.ts" />

import { MAX_VALUE } from "../../../__internal__/constants.js";
import { min } from "../../../__internal__/math.js";
import { pick } from "../../../computations.js";
import { identity, isNotEqualTo, pipe, returns, tuple, } from "../../../functions.js";
import Observable_currentTime from "./Observable.currentTime.js";
import Observable_map from "./Observable.map.js";
import Observable_scan from "./Observable.scan.js";
import Observable_takeWhile from "./Observable.takeWhile.js";
const Observable_keyFrame = (duration, options) => {
    const { easing = identity } = options ?? {};
    return pipe(Observable_currentTime, Observable_scan(([startTime, _], now) => {
        startTime = min(now, startTime);
        const elapsed = now - startTime;
        const next = elapsed > duration ? 1 : easing(elapsed / duration);
        return tuple(startTime, next);
    }, returns([MAX_VALUE, 0])), pick({ map: Observable_map }, 1), Observable_takeWhile(isNotEqualTo(1), {
        inclusive: true,
    }));
};
export default Observable_keyFrame;
