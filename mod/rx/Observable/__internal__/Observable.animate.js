/// <reference types="./Observable.animate.d.ts" />

import Optional_toObservable from "../../../containers/Optional/__internal__/Optional.toObservable.js";
import { identity, isReadonlyArray, isSome, pipe } from "../../../functions.js";
import ReadonlyArray_map from "../../../keyed-containers/ReadonlyArray/__internal__/ReadonlyArray.map.js";
import Observable_concatObservables from "./Observable.concatObservables.js";
import Observable_empty from "./Observable.empty.js";
import Observable_keyFrame from "./Observable.keyFrame.js";
import Observable_map from "./Observable.map.js";
import Observable_repeat from "./Observable.repeat.js";
import Observable_spring from "./Observable.spring.js";
const scale = (start, end) => (v) => {
    const diff = end - start;
    return start + v * diff;
};
const parseAnimationConfig = (config) => config.type === "loop"
    ? pipe(Observable_animate(config.animation), Observable_repeat(config.count))
    : config.type === "delay"
        ? Observable_empty({ delay: config.duration })
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
    return Observable_concatObservables(observables);
};
export default Observable_animate;
