/// <reference types="./Runnable.keyFrame.d.ts" />

import Observable_pick from "../../Observable/__internal__/Observable.pick.js";
import Observable_scan from "../../Observable/__internal__/Observable.scan.js";
import Observable_takeWhile from "../../Observable/__internal__/Observable.takeWhile.js";
import { MAX_VALUE } from "../../__internal__/constants.js";
import { min } from "../../__internal__/math.js";
import { identity, isNotEqualTo, pipe, returns, } from "../../functions.js";
import Observable_currentTime from "./Runnable.currentTime.js";
const Runnable_keyFrame = (duration, options) => {
    const { easing = identity } = options ?? {};
    return pipe(Observable_currentTime(), Observable_scan(([startTime, _], now) => {
        startTime = min(now, startTime);
        const elapsed = now - startTime;
        const next = elapsed > duration ? 1 : easing(elapsed / duration);
        return [startTime, next];
    }, returns([MAX_VALUE, 0])), Observable_pick(1), Observable_takeWhile(isNotEqualTo(1), {
        inclusive: true,
    }));
};
export default Runnable_keyFrame;
