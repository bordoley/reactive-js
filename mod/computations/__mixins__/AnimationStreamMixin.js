/// <reference types="./AnimationStreamMixin.d.ts" />

import { include, init, mix, props, } from "../../__internal__/mixins.js";
import { ComputationLike_isPure, StoreLike_value, } from "../../computations.js";
import { compose, identity, none, pipe, returns, } from "../../functions.js";
import * as Disposable from "../../utils/Disposable.js";
import * as PauseableScheduler from "../../utils/PauseableScheduler.js";
import DelegatingPauseableMixin from "../../utils/__mixins__/DelegatingPauseableMixin.js";
import { PauseableLike_resume, } from "../../utils.js";
import * as Observable from "../Observable.js";
import * as WritableStore from "../WritableStore.js";
import StreamMixin from "./StreamMixin.js";
export const AnimationLike_isRunning = Symbol("AnimationLike_isRunning");
const AnimationStreamMixin = /*@__PURE__*/ (() => {
    return returns(mix(include(StreamMixin(), DelegatingPauseableMixin), function AnimationStreamMixin(f, scheduler, options) {
        const pauseableScheduler = PauseableScheduler.create(scheduler);
        const operator = compose((identity), Observable.map((event) => pipe(f(event), Observable.subscribeOn(pauseableScheduler), Observable.withEffect(() => {
            animationIsRunning[StoreLike_value] = true;
            return () => {
                animationIsRunning[StoreLike_value] = false;
            };
        }))), Observable.switchAll({
            [ComputationLike_isPure]: false,
        }));
        init(StreamMixin(), this, operator, scheduler, options);
        init(DelegatingPauseableMixin, this, pauseableScheduler);
        const animationIsRunning = pipe(WritableStore.create(false), Disposable.addTo(this));
        this[AnimationLike_isRunning] = animationIsRunning;
        this[PauseableLike_resume]();
        return this;
    }, props({
        [AnimationLike_isRunning]: none,
        [StoreLike_value]: 0,
    })));
})();
export default AnimationStreamMixin;
