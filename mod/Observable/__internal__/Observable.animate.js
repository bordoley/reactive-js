/// <reference types="./Observable.animate.d.ts" />

import DeferredObservable_repeat from "../../DeferredObservable/__internal__/DeferredObservable.repeat.js";
import Optional_toRunnable from "../../Optional/__internal__/Optional.toRunnable.js";
import ReadonlyArray_map from "../../ReadonlyArray/__internal__/ReadonlyArray.map.js";
import { identity, isReadonlyArray, isSome, pipe } from "../../functions.js";
import Observable_concatMany from "./Observable.concatMany.js";
import Observable_empty from "./Observable.empty.js";
import Observable_keyFrame from "./Observable.keyFrame.js";
import Observable_map from "./Observable.map.js";
import Observable_spring from "./Observable.spring.js";
const scale = (start, end) => (v) => {
    const diff = end - start;
    return start + v * diff;
};
const parseAnimationConfig = (config) => config.type === "loop"
    ? pipe(Observable_animate(config.animation), DeferredObservable_repeat(config.count ?? 1))
    : config.type === "delay"
        ? Observable_empty({ delay: config.duration })
        : config.type === "frame"
            ? pipe(config.value, Optional_toRunnable(), isSome(config.selector)
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
