/// <reference types="./Streamable.animation.d.ts" />

import { include, init, mixInstanceFactory, props, } from "../../../__internal__/mixins.js";
import { ComputationLike_isPure, StoreLike_value, StreamableLike_stream, } from "../../../computations.js";
import { compose, isFunction, none, pipe, } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as Observable from "../../Observable.js";
import * as WritableStore from "../../WritableStore.js";
import StreamMixin from "../../__mixins__/StreamMixin.js";
export const AnimationLike_isRunning = Symbol("AnimationLike_isRunning");
const Streamable_animation = /*@__PURE__*/ (() => {
    const AnimationStream_create = mixInstanceFactory(include(StreamMixin()), function AnimationStream(animation, scheduler, options) {
        const animationIsRunning = WritableStore.create(false);
        this[AnimationLike_isRunning] = animationIsRunning;
        const operator = compose(Observable.map((event) => pipe(isFunction(animation) ? animation(event) : animation, Observable.withEffect(() => {
            animationIsRunning[StoreLike_value] = true;
            return () => {
                animationIsRunning[StoreLike_value] = false;
            };
        }))), Observable.switchAll({
            [ComputationLike_isPure]: false,
        }));
        init(StreamMixin(), this, operator, scheduler, options);
        pipe(animationIsRunning, Disposable.addTo(this));
        return this;
    }, props({
        [AnimationLike_isRunning]: none,
    }));
    return (animation) => ({
        [StreamableLike_stream]: (scheduler, options) => AnimationStream_create(animation, scheduler, options),
    });
})();
export default Streamable_animation;
