/// <reference types="./Streamable.createAnimationGroupEventHandler.d.ts" />

import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import Disposable_addTo from "../../Disposable/__internal__/Disposable.addTo.js";
import Enumerator_map from "../../Enumerator/__internal__/Enumerator.map.js";
import Enumerator_toReadonlyArray from "../../Enumerator/__internal__/Enumerator.toReadonlyArray.js";
import EventSource_createPublisher from "../../EventSource/__internal__/EventSource.createPublisher.js";
import Observable_animate from "../../Observable/__internal__/Observable.animate.js";
import Observable_forEach from "../../Observable/__internal__/Observable.forEach.js";
import Observable_ignoreElements from "../../Observable/__internal__/Observable.ignoreElements.js";
import Observable_mergeMany from "../../Observable/__internal__/Observable.mergeMany.js";
import Observable_subscribeOn from "../../Observable/__internal__/Observable.subscribeOn.js";
import ReadonlyObjectMap_keys from "../../ReadonlyObjectMap/__internal__/ReadonlyObjectMap.keys.js";
import ReadonlyObjectMap_map from "../../ReadonlyObjectMap/__internal__/ReadonlyObjectMap.map.js";
import ReadonlyObjectMap_mapWithKey from "../../ReadonlyObjectMap/__internal__/ReadonlyObjectMap.mapWithKey.js";
import ReadonlyObjectMap_reduce from "../../ReadonlyObjectMap/__internal__/ReadonlyObjectMap.reduce.js";
import ReadonlyObjectMap_values from "../../ReadonlyObjectMap/__internal__/ReadonlyObjectMap.values.js";
import Stream_delegatingMixin from "../../Stream/__internal__/Stream.delegatingMixin.js";
import { createInstanceFactory, include, init, mix, props, } from "../../__internal__/mixins.js";
import { DelegatingLike_delegate, } from "../../__internal__/types.js";
import { incrementBy, isFunction, isSome, pipe, returns, unsafeCast, } from "../../functions.js";
import { AssociativeCollectionLike_keys, CollectionLike_count, EventListenerLike_notify, KeyedCollectionLike_get, StreamableLike_stream, } from "../../types.js";
import Streamable_createEventHandler from "./Streamable.createEventHandler.js";
export const Streamable_createAnimationGroupEventHandlerStream = /*@__PURE__*/ (() => {
    return createInstanceFactory(mix(include(Stream_delegatingMixin(), Delegating_mixin()), function AnimationEventHandlerStream(instance, animationGroup, creationOptions, scheduler, streamOptions) {
        const streamDelegate = Streamable_createEventHandler((event) => {
            const observables = pipe(animationGroup, ReadonlyObjectMap_mapWithKey((factory, key) => pipe(Observable_animate(isFunction(factory) ? factory(event) : factory), Observable_forEach((value) => {
                const publisher = publishers[key];
                if (isSome(publisher)) {
                    publisher[EventListenerLike_notify](value);
                }
            }), Observable_ignoreElements())));
            const deferredAnimatedObservables = pipe(observables, ReadonlyObjectMap_values(), Enumerator_map(Observable_subscribeOn(animationScheduler)), Enumerator_toReadonlyArray());
            return Observable_mergeMany(deferredAnimatedObservables);
        }, creationOptions)[StreamableLike_stream](scheduler, streamOptions);
        init(Stream_delegatingMixin(), instance, streamDelegate);
        const publishers = pipe(animationGroup, ReadonlyObjectMap_map(_ => pipe(EventSource_createPublisher(), Disposable_addTo(instance))));
        const animationScheduler = creationOptions?.scheduler ?? scheduler;
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
const Streamable_createAnimationGroupEventHandler = ((animationGroup, createOptions) => ({
    [StreamableLike_stream]: (scheduler, options) => Streamable_createAnimationGroupEventHandlerStream(animationGroup, createOptions, scheduler, options),
}));
export default Streamable_createAnimationGroupEventHandler;
