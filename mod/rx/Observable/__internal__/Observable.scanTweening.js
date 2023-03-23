/// <reference types="./Observable.scanTweening.d.ts" />

import { compose, identity, pipe, } from "../../../functions.js";
import Observable_currentTime from "./Observable.currentTime.js";
import Observable_map from "./Observable.map.js";
import Observable_scanMany from "./Observable.scanMany.js";
import Observable_takeWhile from "./Observable.takeWhile.js";
import Observable_withCurrentTime from "./Observable.withCurrentTime.js";
const Observable_scanTweening = (initialValue, options) => {
    const { duration = 400, easing = identity } = options !== null && options !== void 0 ? options : {};
    return compose(Observable_withCurrentTime((time, next) => [time, next]), Observable_scanMany((prev, [start, next]) => pipe(Observable_currentTime(), Observable_map(now => {
        const elapsed = now - start;
        return elapsed > duration
            ? next
            : prev + (next - prev) * easing(elapsed / duration);
    }), Observable_takeWhile(value => value !== next, {
        inclusive: true,
    })), initialValue));
};
export default Observable_scanTweening;
