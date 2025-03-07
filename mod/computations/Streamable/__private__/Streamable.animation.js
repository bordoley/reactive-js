/// <reference types="./Streamable.animation.d.ts" />

import { include, init, mixInstanceFactory, props, } from "../../../__internal__/mixins.js";
import * as Computation from "../../../computations/Computation.js";
import * as Publisher from "../../../computations/Publisher.js";
import { AnimationStreamLike_animation, DeferredComputationWithSideEffects, StreamableLike_stream, } from "../../../computations.js";
import { isFunction, none, pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as PauseableScheduler from "../../../utils/PauseableScheduler.js";
import DelegatingPauseableMixin from "../../../utils/__mixins__/DelegatingPauseableMixin.js";
import { PauseableLike_resume, } from "../../../utils.js";
import * as Observable from "../../Observable.js";
import StreamMixin from "../../__mixins__/StreamMixin.js";
const AnimationStream_create = /*@__PURE__*/ (() => {
    const ObservableModule = {
        concat: Observable.concat,
        forEach: Observable.forEach,
        fromReadonlyArray: Observable.fromReadonlyArray,
        keep: Observable.keep,
        map: Observable.map,
        switchAll: Observable.switchAll,
    };
    return mixInstanceFactory(include(StreamMixin(), DelegatingPauseableMixin), function AnimationStream(instance, animation, scheduler, animationScheduler, options) {
        const pauseableScheduler = PauseableScheduler.create(animationScheduler);
        const publisher = (instance[AnimationStreamLike_animation] =
            Publisher.create());
        const operator = Computation.flatMap(ObservableModule, "switchAll")((event) => pipe(isFunction(animation) ? animation(event) : animation, Computation.notify(ObservableModule)(publisher), Computation.ignoreElements(ObservableModule)(), Observable.subscribeOn(pauseableScheduler), Computation.startWith(ObservableModule)(true), Computation.endWith(ObservableModule)(false)), {
            innerType: DeferredComputationWithSideEffects,
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
