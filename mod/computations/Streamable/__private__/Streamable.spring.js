/// <reference types="./Streamable.spring.d.ts" />

import { Array_push } from "../../../__internal__/constants.js";
import { include, init, mixInstanceFactory, props, } from "../../../__internal__/mixins.js";
import { StoreLike_value, StreamableLike_stream, } from "../../../computations.js";
import { compose, identity, isFunction, isNumber, isReadonlyArray, none, pipe, returns, tuple, } from "../../../functions.js";
import { scale } from "../../../math.js";
import * as Disposable from "../../../utils/Disposable.js";
import DelegatingPauseableMixin from "../../../utils/__mixins__/DelegatingPauseableMixin.js";
import * as Observable from "../../Observable.js";
import * as Runnable from "../../Runnable.js";
import * as SynchronousObservable from "../../SynchronousObservable.js";
import * as WritableStore from "../../WritableStore.js";
import StreamMixin from "../../__mixins__/StreamMixin.js";
import { AnimationLike_isRunning } from "./Streamable.animation.js";
const Streamable_spring = /*@__PURE__*/ (() => {
    const createSpringStream = mixInstanceFactory(include(StreamMixin(), DelegatingPauseableMixin), function SpringStream(scheduler, springOptions, options) {
        const operator = compose((identity), Observable.map((updater) => {
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
            return pipe(Observable.concat(...sources), Observable.withEffect(() => {
                animationIsRunning[StoreLike_value] = true;
                return () => {
                    animationIsRunning[StoreLike_value] = false;
                };
            }));
        }), Observable.switchAll(), Observable.forEach(v => {
            this[StoreLike_value] = v;
        }));
        init(StreamMixin(), this, operator, scheduler, options);
        const animationIsRunning = pipe(WritableStore.create(false), Disposable.addTo(this));
        this[AnimationLike_isRunning] = animationIsRunning;
        return this;
    }, props({
        [AnimationLike_isRunning]: none,
        [StoreLike_value]: 0,
    }));
    return (springOptions) => ({
        [StreamableLike_stream]: (scheduler, options) => createSpringStream(scheduler, springOptions, options),
    });
})();
export default Streamable_spring;
