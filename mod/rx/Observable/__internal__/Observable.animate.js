/// <reference types="./Observable.animate.d.ts" />

import { identity, isReadonlyArray, isSome, pipe } from "../../../functions.js";
import ReadonlyArray_map from "../../../keyed-containers/ReadonlyArray/__internal__/ReadonlyArray.map.js";
import Observable_concatObservables from "./Observable.concatObservables.js";
import Observable_empty from "./Observable.empty.js";
import Observable_map from "./Observable.map.js";
import Observable_repeat from "./Observable.repeat.js";
import Observable_spring from "./Observable.spring.js";
import Observable_tween from "./Observable.tween.js";
const scale = (start, end) => (v) => {
    const diff = end - start;
    return start + v * diff;
};
const parseAnimationConfig = (config) => config.type === "loop"
    ? pipe(Observable_animate(config.animation), Observable_repeat(config.count))
    : config.type === "delay"
        ? Observable_empty({ delay: config.duration })
        : pipe(config.type === "tween"
            ? Observable_tween(config.duration, config)
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
