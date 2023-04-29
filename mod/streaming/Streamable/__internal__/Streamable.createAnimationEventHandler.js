/// <reference types="./Streamable.createAnimationEventHandler.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { DelegatingLike_delegate, } from "../../../__internal__/util.js";
import { incrementBy, isSome, pipe, pipeLazy, returns, unsafeCast, } from "../../../functions.js";
import ReadonlyObjectMap_keys from "../../../keyed-containers/ReadonlyObjectMap/__internal__/ReadonlyObjectMap.keys.js";
import ReadonlyObjectMap_map from "../../../keyed-containers/ReadonlyObjectMap/__internal__/ReadonlyObjectMap.map.js";
import ReadonlyObjectMap_mapWithKey from "../../../keyed-containers/ReadonlyObjectMap/__internal__/ReadonlyObjectMap.mapWithKey.js";
import ReadonlyObjectMap_reduce from "../../../keyed-containers/ReadonlyObjectMap/__internal__/ReadonlyObjectMap.reduce.js";
import ReadonlyObjectMap_values from "../../../keyed-containers/ReadonlyObjectMap/__internal__/ReadonlyObjectMap.values.js";
import Observable_animate from "../../../rx/Observable/__internal__/Observable.animate.js";
import Observable_forEach from "../../../rx/Observable/__internal__/Observable.forEach.js";
import Observable_ignoreElements from "../../../rx/Observable/__internal__/Observable.ignoreElements.js";
import Observable_map from "../../../rx/Observable/__internal__/Observable.map.js";
import Observable_mergeAll from "../../../rx/Observable/__internal__/Observable.mergeAll.js";
import Observable_subscribeOn from "../../../rx/Observable/__internal__/Observable.subscribeOn.js";
import Runnable_fromEnumeratorFactory from "../../../rx/Runnable/__internal__/Runnable.fromEnumeratorFactory.js";
import { StreamableLike_stream, } from "../../../streaming.js";
import { AssociativeCollectionLike_keys, CollectionLike_count, EventListenerLike_notify, KeyedCollectionLike_get, } from "../../../util.js";
import Delegating_mixin from "../../../util/Delegating/__internal__/Delegating.mixin.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import EventPublisher_create from "../../../util/EventPublisher/__internal__/EventPublisher.create.js";
import Scheduler_createAnimationFrameScheduler from "../../../util/Scheduler/__internal__/Scheduler.createAnimationFrameScheduler.js";
import Stream_delegatingMixin from "../../Stream/__internal__/Stream.delegatingMixin.js";
import Streamable_createEventHandler from "./Streamable.createEventHandler.js";
const createAnimationEventHandlerStream = 
/*@__PURE__*/ (() => {
    return createInstanceFactory(mix(include(Stream_delegatingMixin(), Delegating_mixin()), function AnimationEventHandlerStream(instance, animations, creationOptions, scheduler, streamOptions) {
        const streamDelegate = Streamable_createEventHandler((event) => {
            const observables = pipe(animations, ReadonlyObjectMap_mapWithKey((factory, key) => pipe(Observable_animate(factory(event)), Observable_map(value => ({ event, value })), Observable_forEach(value => {
                const publisher = publishers[key];
                if (isSome(publisher)) {
                    publisher[EventListenerLike_notify](value);
                }
            }), Observable_ignoreElements())));
            return pipe(Runnable_fromEnumeratorFactory(pipeLazy(observables, ReadonlyObjectMap_values())), Observable_map(Observable_subscribeOn(pipeLazy(scheduler, Scheduler_createAnimationFrameScheduler))), Observable_mergeAll({
                concurrency: creationOptions?.concurrency,
            }));
        }, creationOptions)[StreamableLike_stream](scheduler, streamOptions);
        init(Stream_delegatingMixin(), instance, streamDelegate);
        const publishers = pipe(animations, ReadonlyObjectMap_map(_ => pipe(EventPublisher_create(), Disposable_addTo(instance))));
        instance[CollectionLike_count] = pipe(publishers, ReadonlyObjectMap_reduce(incrementBy(1), returns(0)));
        init(Delegating_mixin(), instance, publishers);
        return instance;
    }, props({
        [CollectionLike_count]: 0,
    }), {
        get [AssociativeCollectionLike_keys]() {
            unsafeCast(this);
            return pipe(this[DelegatingLike_delegate], ReadonlyObjectMap_keys());
        },
        [KeyedCollectionLike_get](index) {
            return this[DelegatingLike_delegate][index];
        },
    }));
})();
const Streamable_createAnimationEventHandler = ((animations, createOptions) => ({
    [StreamableLike_stream]: (scheduler, options) => createAnimationEventHandlerStream(animations, createOptions, scheduler, options),
}));
export default Streamable_createAnimationEventHandler;
