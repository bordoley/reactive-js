/// <reference types="./Observable.animate.d.ts" />

import Observable_repeat from "../../Observable/__internal__/Observable.repeat.js";
import Optional_toObservable from "../../Optional/__internal__/Optional.toObservable.js";
import ReadonlyArray_map from "../../ReadonlyArray/__internal__/ReadonlyArray.map.js";
import { identity, isReadonlyArray, isSome, pipe, } from "../../functions.js";
import Observable_concatMany from "./Observable.concatMany.js";
import Observable_delay from "./Observable.delay.js";
import Observable_empty from "./Observable.empty.js";
import Observable_keyFrame from "./Observable.keyFrame.js";
import Observable_map from "./Observable.map.js";
import Observable_spring from "./Observable.spring.js";
const scale = (start, end) => (v) => {
    const diff = end - start;
    return start + v * diff;
};
const parseAnimationConfig = (config) => config.type === "loop"
    ? pipe(Observable_animate(config.animation), Observable_repeat(config.count ?? 1))
    : config.type === "delay"
        ? pipe(Observable_empty(), Observable_delay(config.duration, { delayStart: true }))
        : config.type === "frame"
            ? pipe(config.value, Optional_toObservable(), isSome(config.selector)
                ? Observable_map(config.selector)
                : identity)
            : pipe(config.type === "keyframe"
                ? Observable_keyFrame(config.duration, config)
                : Observable_spring(config), Observable_map(scale(config.from, config.to)), isSome(config.selector)
                ? Observable_map(config.selector)
                : identity);
const Observable_animate = (config) => {
    const configs = isReadonlyArray(config)
        ? config
        : [config];
    const observables = pipe(configs, ReadonlyArray_map(parseAnimationConfig));
    return Observable_concatMany(observables);
};
export default Observable_animate;
