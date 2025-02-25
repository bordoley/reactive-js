/// <reference types="./Streamable.spring.d.ts" />

import { include, init, mixInstanceFactory, props, } from "../../../__internal__/mixins.js";
import { AnimationStreamLike_animation, StreamableLike_stream, } from "../../../concurrent.js";
import * as Publisher from "../../../events/Publisher.js";
import { EventListenerLike_notify } from "../../../events.js";
import { compose, none, pipe, scale, } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as Observable from "../../Observable.js";
import * as Subject from "../../Subject.js";
import StreamMixin from "../../__mixins__/StreamMixin.js";
const SpringStream_create = /*@__PURE__*/ (() => {
    return mixInstanceFactory(include(StreamMixin()), function AnimationStream(instance, initialValue, scheduler, animationScheduler, springOptions, options) {
        const publisher = (instance[AnimationStreamLike_animation] =
            Publisher.create());
        const accFeedbackStream = Subject.create();
        const operator = compose((src) => Observable.zipLatest(accFeedbackStream, src), Observable.switchMap(([acc, update]) => pipe(Observable.spring(springOptions), Observable.map(scale(acc, update(acc))), Observable.notify(publisher), Observable.notify(accFeedbackStream), Observable.ignoreElements(), Observable.subscribeOn(animationScheduler), Observable.startWith(true), Observable.endWith(false)), {
            innerType: Observable.DeferredObservableWithSideEffectsType,
        }));
        init(StreamMixin(), instance, operator, scheduler, options);
        pipe(instance, Disposable.add(publisher), Disposable.add(accFeedbackStream));
        accFeedbackStream[EventListenerLike_notify](initialValue);
        return instance;
    }, props({
        [AnimationStreamLike_animation]: none,
    }));
})();
const Streamable_spring = (initialValue, creationOptions) => ({
    [StreamableLike_stream]: (scheduler, options) => SpringStream_create(initialValue, scheduler, creationOptions?.animationScheduler ?? scheduler, creationOptions, options),
});
export default Streamable_spring;
