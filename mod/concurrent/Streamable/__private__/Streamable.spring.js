/// <reference types="./Streamable.spring.d.ts" />

import { include, init, mixInstanceFactory, props, } from "../../../__internal__/mixins.js";
import * as Computation from "../../../computations/Computation.js";
import * as Iterable from "../../../computations/Iterable.js";
import { DeferredComputationWithSideEffects, } from "../../../computations.js";
import { AnimationStreamLike_animation, PauseableLike_resume, StreamableLike_stream, } from "../../../concurrent.js";
import * as Publisher from "../../../events/Publisher.js";
import { EventListenerLike_notify } from "../../../events.js";
import { compose, isNumber, isReadonlyArray, none, pipe, returns, scale, tuple, } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as Observable from "../../Observable.js";
import * as PauseableScheduler from "../../PauseableScheduler.js";
import * as Subject from "../../Subject.js";
import DelegatingPauseableMixin from "../../__mixins__/DelegatingPauseableMixin.js";
import StreamMixin from "../../__mixins__/StreamMixin.js";
const SpringStream_create = /*@__PURE__*/ (() => {
    const ObservableModule = {
        concat: Observable.concat,
        concatAll: Observable.concatAll,
        forEach: Observable.forEach,
        fromReadonlyArray: Observable.fromReadonlyArray,
        keep: Observable.keep,
        map: Observable.map,
    };
    return mixInstanceFactory(include(StreamMixin(), DelegatingPauseableMixin), function AnimationStream(instance, initialValue, scheduler, animationScheduler, springOptions, options) {
        const pauseableScheduler = PauseableScheduler.create(animationScheduler);
        const publisher = (instance[AnimationStreamLike_animation] =
            Publisher.create());
        const accFeedbackStream = Subject.create({ replay: 1 });
        const operator = compose(Observable.withLatestFrom(accFeedbackStream, (updater, acc) => tuple(updater(acc), acc)), Computation.concatMap(ObservableModule)(([updated, acc]) => {
            const initialValue = isNumber(updated) || isReadonlyArray(updated)
                ? acc
                : updated.from;
            const destinations = isNumber(updated)
                ? [updated]
                : isReadonlyArray(updated)
                    ? updated
                    : isNumber(updated.to)
                        ? [updated.to]
                        : updated.to;
            const sources = pipe(destinations, Iterable.scan(([, prev], v) => tuple(prev, v), returns(tuple(initialValue, initialValue))), Iterable.reduce((animations, [prev, next]) => {
                if (prev !== next) {
                    animations.push(pipe(Observable.spring(springOptions), Observable.map(scale(prev, next))));
                }
                return animations;
            }, () => []));
            return sources.length > 0
                ? pipe(sources, Computation.concatMany(ObservableModule), Computation.notify(ObservableModule)(publisher), Computation.notify(ObservableModule)(accFeedbackStream), Computation.ignoreElements(ObservableModule)(), Observable.subscribeOn(pauseableScheduler), Computation.startWith(ObservableModule)(true), Computation.endWith(ObservableModule)(false))
                : Observable.empty();
        }, {
            innerType: DeferredComputationWithSideEffects,
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
