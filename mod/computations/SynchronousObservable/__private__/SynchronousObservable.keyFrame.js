/// <reference types="./SynchronousObservable.keyFrame.d.ts" />

import { MAX_VALUE } from "../../../__internal__/constants.js";
import { identity, isNotEqualTo, pipe, returns, tuple, } from "../../../functions.js";
import { min } from "../../../math.js";
import Observable_map from "../../Observable/__private__/Observable.map.js";
import Observable_scan from "../../Observable/__private__/Observable.scan.js";
import Observable_takeWhile from "../../Observable/__private__/Observable.takeWhile.js";
import SynchronousObservable_currentTime from "./SynchronousObservable.currentTime.js";
const SynchronousObservable_keyFrame = ((duration, options) => {
    const { easing = identity } = options ?? {};
    return pipe(SynchronousObservable_currentTime, Observable_scan(([startTime, _], now) => {
        startTime = min(now, startTime);
        const elapsed = now - startTime;
        const next = elapsed > duration ? 1 : easing(elapsed / duration);
        return tuple(startTime, next);
    }, returns(tuple(MAX_VALUE, 0))), Observable_map((x) => x[1]), Observable_takeWhile(isNotEqualTo(1), {
        inclusive: true,
    }));
});
export default SynchronousObservable_keyFrame;
