/// <reference types="./Runnable.animate.d.ts" />

import { identity, isReadonlyArray, isSome, pipe } from "../../../functions.js";
import Observable_concatObservables from "../../Observable/__internal__/Observable.concatObservables.js";
import Observable_empty from "../../Observable/__internal__/Observable.empty.js";
import Observable_keyFrame from "../../Observable/__internal__/Observable.keyFrame.js";
import Observable_map from "../../Observable/__internal__/Observable.map.js";
import Observable_repeat from "../../Observable/__internal__/Observable.repeat.js";
import Observable_spring from "../../Observable/__internal__/Observable.spring.js";
import Optional_toObservable from "../../Optional/__internal__/Optional.toObservable.js";
import ReadonlyArray_map from "../../ReadonlyArray/__internal__/ReadonlyArray.map.js";
const scale = (start, end) => (v) => {
    const diff = end - start;
    return start + v * diff;
};
const parseAnimationConfig = (config) => config.type === "loop"
    ? pipe(Runnable_animate(config.animation), Observable_repeat(config.count))
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
const Runnable_animate = (config) => {
    const configs = isReadonlyArray(config)
        ? config
        : [config];
    const observables = pipe(configs, ReadonlyArray_map(parseAnimationConfig));
    return Observable_concatObservables(observables);
};
export default Runnable_animate;
