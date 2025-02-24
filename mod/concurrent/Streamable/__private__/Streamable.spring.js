/// <reference types="./Streamable.spring.d.ts" />

import { include, init, mixInstanceFactory, props, } from "../../../__internal__/mixins.js";
import { AnimationStreamLike_animation, PauseableLike_resume, StreamableLike_stream, } from "../../../concurrent.js";
import * as Publisher from "../../../events/Publisher.js";
import { EventListenerLike_notify } from "../../../events.js";
import { compose, none, pipe, scale, tuple, } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as Observable from "../../Observable.js";
import * as PauseableScheduler from "../../PauseableScheduler.js";
import * as Subject from "../../Subject.js";
import DelegatingPauseableMixin from "../../__mixins__/DelegatingPauseableMixin.js";
import StreamMixin from "../../__mixins__/StreamMixin.js";
const SpringStream_create = /*@__PURE__*/ (() => {
    return mixInstanceFactory(include(StreamMixin(), DelegatingPauseableMixin), function AnimationStream(instance, initialValue, scheduler, animationScheduler, springOptions, options) {
        const pauseableScheduler = PauseableScheduler.create(animationScheduler);
        const publisher = (instance[AnimationStreamLike_animation] =
            Publisher.create());
        const accFeedbackStream = Subject.create({ replay: 1 });
        const operator = compose(Observable.withLatestFrom(accFeedbackStream, (updater, acc) => tuple(updater(acc), acc)), Observable.switchMap(([updated, acc]) => updated !== acc
            ? pipe(Observable.spring(springOptions), Observable.map(scale(acc, updated)), Observable.notify(publisher), Observable.notify(accFeedbackStream), Observable.ignoreElements(), Observable.subscribeOn(pauseableScheduler), Observable.startWith(true), Observable.endWith(false))
            : Observable.empty(), {
            innerType: Observable.DeferredObservableWithSideEffectsType,
        }));
        init(StreamMixin(), instance, operator, scheduler, options);
        init(DelegatingPauseableMixin, instance, pauseableScheduler);
        pipe(instance, Disposable.add(publisher), Disposable.add(accFeedbackStream), Disposable.add(pauseableScheduler));
        instance[PauseableLike_resume]();
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
