/// <reference types="./Observable.animate.d.ts" />

import { identity, isSome, pipe } from "../../../functions.js";
import ReadonlyArray_map from "../../../keyed-containers/ReadonlyArray/__internal__/ReadonlyArray.map.js";
import Observable_concatObservables from "./Observable.concatObservables.js";
import Observable_map from "./Observable.map.js";
import Observable_spring from "./Observable.spring.js";
import Observable_tween from "./Observable.tween.js";
const scale = (start, end) => (v) => {
    const diff = end - start;
    return start + v * diff;
};
const parseAnimationConfig = (config) => pipe(config.type === "tween"
    ? Observable_tween(config.duration, config)
    : Observable_spring(config), Observable_map(scale(config.from, config.to)), isSome(config.selector)
    ? Observable_map(config.selector)
    : identity);
const Observable_animate = (...configs) => {
    const observables = pipe(configs, ReadonlyArray_map(parseAnimationConfig));
    return Observable_concatObservables(observables);
};
export default Observable_animate;
