/// <reference types="./Observable.tweening.d.ts" />

import { compose, identity, pipe, } from "../../../functions.js";
import Observable_currentTime from "./Observable.currentTime.js";
import Observable_map from "./Observable.map.js";
import Observable_scanMany from "./Observable.scanMany.js";
import Observable_takeWhile from "./Observable.takeWhile.js";
import Observable_withCurrentTime from "./Observable.withCurrentTime.js";
const Observable_tweening = (duration, initialValue, options) => {
    var _a;
    const easing = (_a = options === null || options === void 0 ? void 0 : options.easing) !== null && _a !== void 0 ? _a : identity;
    return compose(Observable_withCurrentTime((time, next) => [time, next]), Observable_scanMany((prev, [start, next]) => pipe(Observable_currentTime(), Observable_map(now => {
        const elapsed = now - start;
        return elapsed > duration
            ? next
            : prev + (next - prev) * easing(elapsed / duration);
    }), Observable_takeWhile(value => value !== next, {
        inclusive: true,
    })), initialValue));
};
export default Observable_tweening;
