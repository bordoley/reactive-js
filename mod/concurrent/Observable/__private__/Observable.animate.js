/// <reference types="./Observable.animate.d.ts" />

import * as ReadonlyArray from "../../../collections/ReadonlyArray.js";
import { identity, isReadonlyArray, isSome, pipe } from "../../../functions.js";
import Observable_concatMany from "./Observable.concatMany.js";
import Observable_empty from "./Observable.empty.js";
import Observable_fromValue from "./Observable.fromValue.js";
import Observable_keyFrame from "./Observable.keyFrame.js";
import Observable_map from "./Observable.map.js";
import Observable_repeat from "./Observable.repeat.js";
import Observable_spring from "./Observable.spring.js";
const scale = (start, end) => (v) => {
    const diff = end - start;
    return start + v * diff;
};
const parseAnimationConfig = (config) => config.type === "loop"
    ? pipe(Observable_animate(config.animation), Observable_repeat(config.count ?? 1))
    : config.type === "delay"
        ? Observable_empty({ delay: config.duration })
        : config.type === "frame" && isSome(config.selector)
            ? pipe(config.value, Observable_fromValue(), isSome(config.selector)
                ? Observable_map(config.selector)
                : identity)
            : config.type === "frame"
                ? pipe(config.value, Observable_fromValue(), isSome(config.selector)
                    ? Observable_map(config.selector)
                    : identity)
                : pipe(config.type === "keyframe"
                    ? Observable_keyFrame(config.duration, config)
                    : Observable_spring(config), Observable_map(scale(config.from, config.to)), isSome(config.selector)
                    ? Observable_map(config.selector)
                    : identity);
const Observable_animate = (config) => Observable_concatMany(pipe(isReadonlyArray(config) ? config : [config], ReadonlyArray.map(parseAnimationConfig)));
export default Observable_animate;
