/// <reference types="./Streamable.createAnimationGroupEventHandler.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { DelegatingLike_delegate, } from "../../../__internal__/util.js";
import { incrementBy, isSome, none, pipe, pipeLazy, returns, unsafeCast, } from "../../../functions.js";
import ReadonlyObjectMap_keys from "../../../keyed-containers/ReadonlyObjectMap/__internal__/ReadonlyObjectMap.keys.js";
import ReadonlyObjectMap_map from "../../../keyed-containers/ReadonlyObjectMap/__internal__/ReadonlyObjectMap.map.js";
import ReadonlyObjectMap_mapWithKey from "../../../keyed-containers/ReadonlyObjectMap/__internal__/ReadonlyObjectMap.mapWithKey.js";
import ReadonlyObjectMap_reduce from "../../../keyed-containers/ReadonlyObjectMap/__internal__/ReadonlyObjectMap.reduce.js";
import ReadonlyObjectMap_values from "../../../keyed-containers/ReadonlyObjectMap/__internal__/ReadonlyObjectMap.values.js";
import { MulticastObservableLike_buffer, PauseableObservableLike_isPaused, } from "../../../rx.js";
import Observable_animate from "../../../rx/Observable/__internal__/Observable.animate.js";
import Observable_forEach from "../../../rx/Observable/__internal__/Observable.forEach.js";
import Observable_ignoreElements from "../../../rx/Observable/__internal__/Observable.ignoreElements.js";
import Observable_map from "../../../rx/Observable/__internal__/Observable.map.js";
import Observable_mergeAll from "../../../rx/Observable/__internal__/Observable.mergeAll.js";
import Observable_subscribe from "../../../rx/Observable/__internal__/Observable.subscribe.js";
import Observable_subscribeOn from "../../../rx/Observable/__internal__/Observable.subscribeOn.js";
import Publisher_create from "../../../rx/Publisher/__internal__/Publisher.create.js";
import Runnable_fromEnumeratorFactory from "../../../rx/Runnable/__internal__/Runnable.fromEnumeratorFactory.js";
import { StreamableLike_stream, } from "../../../streaming.js";
import { AssociativeCollectionLike_keys, CollectionLike_count, EventListenerLike_notify, KeyedCollectionLike_get, PauseableLike_isPaused, PauseableLike_pause, PauseableLike_resume, } from "../../../util.js";
import Delegating_mixin from "../../../util/Delegating/__internal__/Delegating.mixin.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import EventPublisher_create from "../../../util/EventPublisher/__internal__/EventPublisher.create.js";
import Scheduler_createAnimationFrameScheduler from "../../../util/Scheduler/__internal__/Scheduler.createAnimationFrameScheduler.js";
import Scheduler_toPauseableScheduler from "../../../util/Scheduler/__internal__/Scheduler.toPausableScheduler.js";
import Stream_delegatingMixin from "../../Stream/__internal__/Stream.delegatingMixin.js";
import Streamable_createEventHandler from "./Streamable.createEventHandler.js";
const createAnimationGroupEventHandlerStream = 
/*@__PURE__*/ (() => {
    return createInstanceFactory(mix(include(Stream_delegatingMixin(), Delegating_mixin()), function AnimationEventHandlerStream(instance, animationGroup, creationOptions, scheduler, streamOptions) {
        const streamDelegate = Streamable_createEventHandler((type) => {
            const observables = pipe(animationGroup, ReadonlyObjectMap_mapWithKey((factory, key) => pipe(Observable_animate(factory(type)), Observable_map(value => ({ type, value })), Observable_forEach(value => {
                const publisher = publishers[key];
                if (isSome(publisher)) {
                    publisher[EventListenerLike_notify](value);
                }
            }), Observable_ignoreElements())));
            return pipe(Runnable_fromEnumeratorFactory(pipeLazy(observables, ReadonlyObjectMap_values())), Observable_map(Observable_subscribeOn(animationScheduler)), Observable_mergeAll({
                concurrency: creationOptions?.concurrency,
            }));
        }, creationOptions)[StreamableLike_stream](scheduler, streamOptions);
        init(Stream_delegatingMixin(), instance, streamDelegate);
        const publishers = pipe(animationGroup, ReadonlyObjectMap_map(_ => pipe(EventPublisher_create(), Disposable_addTo(instance))));
        const animationScheduler = pipe(scheduler, Scheduler_createAnimationFrameScheduler, Disposable_addTo(instance), Scheduler_toPauseableScheduler, Disposable_addTo(instance));
        instance[CollectionLike_count] = pipe(publishers, ReadonlyObjectMap_reduce(incrementBy(1), returns(0)));
        init(Delegating_mixin(), instance, publishers);
        const isPausePublisher = Publisher_create({
            replay: 1,
        });
        instance[PauseableObservableLike_isPaused] = isPausePublisher;
        isPausePublisher[EventListenerLike_notify](false);
        pipe(isPausePublisher, Observable_forEach(isPaused => {
            if (isPaused) {
                animationScheduler[PauseableLike_pause]();
            }
            else {
                animationScheduler[PauseableLike_resume]();
            }
        }), Observable_subscribe(scheduler, {
            capacity: 1,
            backpressureStrategy: "drop-oldest",
        }), Disposable_addTo(instance));
        return instance;
    }, props({
        [CollectionLike_count]: 0,
        [PauseableObservableLike_isPaused]: none,
    }), {
        get [AssociativeCollectionLike_keys]() {
            unsafeCast(this);
            return pipe(this[DelegatingLike_delegate], ReadonlyObjectMap_keys());
        },
        get [PauseableLike_isPaused]() {
            unsafeCast(this);
            return this[PauseableObservableLike_isPaused][MulticastObservableLike_buffer][KeyedCollectionLike_get](0);
        },
        [PauseableLike_pause]() {
            this[PauseableObservableLike_isPaused][EventListenerLike_notify](true);
        },
        [PauseableLike_resume]() {
            this[PauseableObservableLike_isPaused][EventListenerLike_notify](false);
        },
        [KeyedCollectionLike_get](index) {
            return this[DelegatingLike_delegate][index];
        },
    }));
})();
const Streamable_createAnimationGroupEventHandler = ((animationGroup, createOptions) => ({
    [StreamableLike_stream]: (scheduler, options) => createAnimationGroupEventHandlerStream(animationGroup, createOptions, scheduler, options),
}));
export default Streamable_createAnimationGroupEventHandler;
