/// <reference types="./Observable.keyFrame.d.ts" />

import { MAX_VALUE } from "../../../__internal__/constants.js";
import * as Computation from "../../../computations/Computation.js";
import { identity, isNotEqualTo, pipe, returns, tuple, } from "../../../functions.js";
import { min } from "../../../math.js";
import Observable_currentTime from "./Observable.currentTime.js";
import Observable_map from "./Observable.map.js";
import Observable_scan from "./Observable.scan.js";
import Observable_takeWhile from "./Observable.takeWhile.js";
const ObservableModule = {
    map: Observable_map,
};
const Observable_keyFrame = (duration, options) => {
    const { easing = identity } = options ?? {};
    return pipe(Observable_currentTime, Observable_scan(([startTime, _], now) => {
        startTime = min(now, startTime);
        const elapsed = now - startTime;
        const next = elapsed > duration ? 1 : easing(elapsed / duration);
        return tuple(startTime, next);
    }, returns(tuple(MAX_VALUE, 0))), Computation.pick(ObservableModule)(1), Observable_takeWhile(isNotEqualTo(1), {
        inclusive: true,
    }));
};
export default Observable_keyFrame;
