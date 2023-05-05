/// <reference types="./Streamable.createAnimationGroupEventHandler.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { DelegatingLike_delegate, } from "../../../__internal__/util.js";
import { AssociativeCollectionLike_keys, CollectionLike_count, KeyedCollectionLike_get, } from "../../../containers.js";
import Enumerator_map from "../../../containers/Enumerator/__internal__/Enumerator.map.js";
import Enumerator_toReadonlyArray from "../../../containers/Enumerator/__internal__/Enumerator.toReadonlyArray.js";
import ReadonlyObjectMap_keys from "../../../containers/ReadonlyObjectMap/__internal__/ReadonlyObjectMap.keys.js";
import ReadonlyObjectMap_map from "../../../containers/ReadonlyObjectMap/__internal__/ReadonlyObjectMap.map.js";
import ReadonlyObjectMap_mapWithKey from "../../../containers/ReadonlyObjectMap/__internal__/ReadonlyObjectMap.mapWithKey.js";
import ReadonlyObjectMap_reduce from "../../../containers/ReadonlyObjectMap/__internal__/ReadonlyObjectMap.reduce.js";
import ReadonlyObjectMap_values from "../../../containers/ReadonlyObjectMap/__internal__/ReadonlyObjectMap.values.js";
import { incrementBy, isSome, pipe, returns, unsafeCast, } from "../../../functions.js";
import { StreamableLike_stream, } from "../../../rx.js";
import Observable_animate from "../../../rx/Observable/__internal__/Observable.animate.js";
import Observable_forEach from "../../../rx/Observable/__internal__/Observable.forEach.js";
import Observable_ignoreElements from "../../../rx/Observable/__internal__/Observable.ignoreElements.js";
import Observable_map from "../../../rx/Observable/__internal__/Observable.map.js";
import Observable_mergeObservables from "../../../rx/Observable/__internal__/Observable.mergeObservables.js";
import Observable_subscribeOn from "../../../rx/Observable/__internal__/Observable.subscribeOn.js";
import { EventListenerLike_notify, } from "../../../util.js";
import Delegating_mixin from "../../../util/Delegating/__internal__/Delegating.mixin.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import EventPublisher_create from "../../../util/EventPublisher/__internal__/EventPublisher.create.js";
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
            return pipe(observables, ReadonlyObjectMap_values(), Enumerator_map(Observable_subscribeOn(animationScheduler)), Enumerator_toReadonlyArray(), Observable_mergeObservables);
        }, creationOptions)[StreamableLike_stream](scheduler, streamOptions);
        init(Stream_delegatingMixin(), instance, streamDelegate);
        const publishers = pipe(animationGroup, ReadonlyObjectMap_map(_ => pipe(EventPublisher_create(), Disposable_addTo(instance))));
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
    [StreamableLike_stream]: (scheduler, options) => createAnimationGroupEventHandlerStream(animationGroup, createOptions, scheduler, options),
}));
export default Streamable_createAnimationGroupEventHandler;
