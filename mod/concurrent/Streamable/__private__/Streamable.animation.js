/// <reference types="./Streamable.animation.d.ts" />

import { include, init, mixInstanceFactory, props, } from "../../../__internal__/mixins.js";
import * as Computation from "../../../computations/Computation.js";
import { DeferredComputationWithSideEffectsType } from "../../../computations.js";
import { AnimationStreamLike_animation, PauseableLike_resume, StreamableLike_stream, } from "../../../concurrent.js";
import * as Publisher from "../../../events/Publisher.js";
import { isFunction, none, pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as DeferredObservable from "../../DeferredObservable.js";
import * as Observable from "../../Observable.js";
import * as PauseableScheduler from "../../PauseableScheduler.js";
import DelegatingPauseableMixin from "../../__mixins__/DelegatingPauseableMixin.js";
import StreamMixin from "../../__mixins__/StreamMixin.js";
const AnimationStream_create = /*@__PURE__*/ (() => {
    return mixInstanceFactory(include(StreamMixin(), DelegatingPauseableMixin), function AnimationStream(instance, animation, scheduler, animationScheduler, options) {
        const pauseableScheduler = PauseableScheduler.create(animationScheduler);
        const publisher = (instance[AnimationStreamLike_animation] =
            Publisher.create());
        const operator = Observable.switchMap((event) => pipe(isFunction(animation) ? animation(event) : animation, Observable.notify(publisher), Observable.ignoreElements(), Observable.subscribeOn(pauseableScheduler), Computation.startWith({
            concatMany: DeferredObservable.concatMany,
            fromReadonlyArray: DeferredObservable.fromReadonlyArray,
        })(true), Computation.endWith({
            concatMany: DeferredObservable.concatMany,
            fromReadonlyArray: DeferredObservable.fromReadonlyArray,
        })(false)), {
            innerType: DeferredComputationWithSideEffectsType,
        });
        init(StreamMixin(), instance, operator, scheduler, options);
        init(DelegatingPauseableMixin, instance, pauseableScheduler);
        pipe(instance, Disposable.add(publisher), Disposable.add(pauseableScheduler));
        instance[PauseableLike_resume]();
        return instance;
    }, props({
        [AnimationStreamLike_animation]: none,
    }));
})();
const Streamable_animation = ((animationGroup, creationOptions) => ({
    [StreamableLike_stream]: (scheduler, options) => AnimationStream_create(animationGroup, scheduler, creationOptions?.animationScheduler ?? scheduler, options),
}));
export default Streamable_animation;
