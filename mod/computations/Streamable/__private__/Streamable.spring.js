/// <reference types="./Streamable.spring.d.ts" />

import { Array_push } from "../../../__internal__/constants.js";
import { include, init, mixInstanceFactory, props, } from "../../../__internal__/mixins.js";
import { StoreLike_value, StreamableLike_stream, } from "../../../computations.js";
import { isFunction, isNumber, isReadonlyArray, pipe, returns, tuple, } from "../../../functions.js";
import { scale } from "../../../math.js";
import DelegatingPauseableMixin from "../../../utils/__mixins__/DelegatingPauseableMixin.js";
import * as Broadcaster from "../../Broadcaster.js";
import * as Observable from "../../Observable.js";
import * as Runnable from "../../Runnable.js";
import * as SynchronousObservable from "../../SynchronousObservable.js";
import AnimationStreamMixin from "../../__mixins__/AnimationStreamMixin.js";
const Streamable_spring = /*@__PURE__*/ (() => {
    const createSpringStream = mixInstanceFactory(include(AnimationStreamMixin(), DelegatingPauseableMixin), function SpringStream(scheduler, springOptions, options) {
        const f = (updater) => {
            const acc = this[StoreLike_value];
            const command = isFunction(updater) ? updater(acc) : updater;
            const springCommandOptions = isNumber(command) || isReadonlyArray(command)
                ? springOptions
                : {
                    stiffness: command.stiffness ?? springOptions?.stiffness,
                    damping: command.damping ?? springOptions?.damping,
                    precision: command.precision ?? springOptions?.precision,
                };
            const startValue = isNumber(command) || isReadonlyArray(command) ? acc : command.from;
            const destinations = isNumber(command)
                ? [command]
                : isReadonlyArray(command)
                    ? command
                    : isNumber(command.to)
                        ? [command.to]
                        : command.to;
            const sources = pipe(destinations, Runnable.fromReadonlyArray(), Runnable.scan(([, prev], v) => tuple(prev, v), returns(tuple(startValue, startValue))), Runnable.reduce((animations, [prev, next]) => {
                if (prev !== next) {
                    animations[Array_push](pipe(SynchronousObservable.spring(springCommandOptions), SynchronousObservable.map(scale(prev, next))));
                }
                return animations;
            }, () => []));
            return Observable.concat(...sources);
        };
        init(AnimationStreamMixin(), this, f, scheduler, options);
        pipe(this, Broadcaster.addEventHandler(v => {
            this[StoreLike_value] = v;
        }));
        return this;
    }, props({
        [StoreLike_value]: 0,
    }));
    return (springOptions) => ({
        [StreamableLike_stream]: (scheduler, options) => createSpringStream(scheduler, springOptions, options),
    });
})();
export default Streamable_spring;
