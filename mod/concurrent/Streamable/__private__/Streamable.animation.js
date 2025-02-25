/// <reference types="./Streamable.animation.d.ts" />

import { include, init, mixInstanceFactory, props, } from "../../../__internal__/mixins.js";
import { AnimationStreamLike_animation, StreamableLike_stream, } from "../../../concurrent.js";
import * as Publisher from "../../../events/Publisher.js";
import { isFunction, none, pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as Observable from "../../Observable.js";
import StreamMixin from "../../__mixins__/StreamMixin.js";
const AnimationStream_create = /*@__PURE__*/ (() => {
    return mixInstanceFactory(include(StreamMixin()), function AnimationStream(instance, animation, scheduler, animationScheduler, options) {
        const operator = Observable.switchMap((event) => pipe(isFunction(animation) ? animation(event) : animation, Observable.notify(publisher), Observable.ignoreElements(), Observable.subscribeOn(animationScheduler), Observable.startWith(true), Observable.endWith(false)), {
            innerType: Observable.DeferredObservableWithSideEffectsType,
        });
        init(StreamMixin(), instance, operator, scheduler, options);
        const publisher = pipe(Publisher.create(), Disposable.addTo(instance));
        instance[AnimationStreamLike_animation] = publisher;
        return instance;
    }, props({
        [AnimationStreamLike_animation]: none,
    }));
})();
const Streamable_animation = ((animationGroup, creationOptions) => ({
    [StreamableLike_stream]: (scheduler, options) => AnimationStream_create(animationGroup, scheduler, creationOptions?.animationScheduler ?? scheduler, options),
}));
export default Streamable_animation;
