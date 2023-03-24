/// <reference types="./Observable.tween.d.ts" />

import { MAX_VALUE } from "../../../__internal__/constants.js";
import { min } from "../../../__internal__/math.js";
import { identity, pipe, returns } from "../../../functions.js";
import Observable_currentTime from "./Observable.currentTime.js";
import Observable_map from "./Observable.map.js";
import Observable_scan from "./Observable.scan.js";
import Observable_takeWhile from "./Observable.takeWhile.js";
const Observable_tween = (start, finish, options) => {
    const { duration = 400, easing = identity } = options !== null && options !== void 0 ? options : {};
    return pipe(Observable_currentTime(), Observable_scan(([startTime, _], now) => {
        startTime = min(now, startTime);
        const elapsed = now - startTime;
        const next = elapsed > duration
            ? finish
            : start + (finish - start) * easing(elapsed / duration);
        return [startTime, next];
    }, returns([MAX_VALUE, start])), Observable_map(([, value]) => value), Observable_takeWhile(value => value !== finish, {
        inclusive: true,
    }));
};
export default Observable_tween;
