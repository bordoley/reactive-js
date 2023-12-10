/// <reference types="./Streamable.createAnimationGroupEventHandler.d.ts" />

import { createInstanceFactory, include, init, mix, props, unsafeCast, } from "../../../__internal__/mixins.js";
import { AssociativeLike_keys, CollectionLike_count, EnumerableLike_enumerate, KeyedLike_get, } from "../../../collections.js";
import * as ReadonlyObjectMap from "../../../collections/ReadonlyObjectMap.js";
import { StreamableLike_stream, } from "../../../concurrent.js";
import { SinkLike_notify, } from "../../../events.js";
import * as Publisher from "../../../events/Publisher.js";
import { incrementBy, isFunction, isSome, none, pipe, returns, } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import Observable_animate from "../../Observable/__internal__/Observable.animate.js";
import Observable_forEach from "../../Observable/__internal__/Observable.forEach.js";
import Observable_fromEnumerable from "../../Observable/__internal__/Observable.fromEnumerable.js";
import Observable_ignoreElements from "../../Observable/__internal__/Observable.ignoreElements.js";
import Observable_map from "../../Observable/__internal__/Observable.map.js";
import Observable_mergeMany from "../../Observable/__internal__/Observable.mergeMany.js";
import Observable_subscribeOn from "../../Observable/__internal__/Observable.subscribeOn.js";
import Observable_toReadonlyArray from "../../Observable/__internal__/Observable.toReadonlyArray.js";
import DelegatingStreamMixin from "../../__mixins__/DelegatingStreamMixin.js";
import Streamable_createEventHandler from "./Streamable.createEventHandler.js";
export const Streamable_createAnimationGroupEventHandlerStream = /*@__PURE__*/ (() => {
    const AnimationEventHandlerStream_delegate = Symbol("AnimationEventHandlerStream_delegate");
    return createInstanceFactory(mix(include(DelegatingStreamMixin()), function AnimationEventHandlerStream(instance, animationGroup, creationOptions, scheduler, streamOptions) {
        const streamDelegate = Streamable_createEventHandler((event) => {
            const observables = pipe(animationGroup, ReadonlyObjectMap.map((factory, key) => pipe(Observable_animate(isFunction(factory) ? factory(event) : factory), Observable_forEach((value) => {
                const publisher = publishers[key];
                if (isSome(publisher)) {
                    publisher[SinkLike_notify](value);
                }
            }), Observable_ignoreElements())));
            const deferredAnimatedObservables = pipe(observables, ReadonlyObjectMap.values(), Observable_fromEnumerable(), Observable_map(Observable_subscribeOn(animationScheduler)), Observable_toReadonlyArray());
            return Observable_mergeMany(deferredAnimatedObservables);
        }, creationOptions)[StreamableLike_stream](scheduler, streamOptions);
        init(DelegatingStreamMixin(), instance, streamDelegate);
        const publishers = pipe(animationGroup, ReadonlyObjectMap.map(_ => pipe(Publisher.create(), Disposable.addTo(instance))));
        const animationScheduler = creationOptions?.scheduler ?? scheduler;
        instance[CollectionLike_count] = pipe(publishers, ReadonlyObjectMap.reduce(incrementBy(1), returns(0)));
        instance[AnimationEventHandlerStream_delegate] = publishers;
        return instance;
    }, props({
        [AnimationEventHandlerStream_delegate]: none,
        [CollectionLike_count]: 0,
    }), {
        get [AssociativeLike_keys]() {
            unsafeCast(this);
            return pipe(this[AnimationEventHandlerStream_delegate], ReadonlyObjectMap.keys());
        },
        [EnumerableLike_enumerate]() {
            return pipe(this[AnimationEventHandlerStream_delegate], ReadonlyObjectMap.values())[EnumerableLike_enumerate]();
        },
        [Symbol.iterator]() {
            return this[AnimationEventHandlerStream_delegate][Symbol.iterator]();
        },
        [KeyedLike_get](index) {
            return this[AnimationEventHandlerStream_delegate][index];
        },
    }));
})();
const Streamable_createAnimationGroupEventHandler = ((animationGroup, createOptions) => ({
    [StreamableLike_stream]: (scheduler, options) => Streamable_createAnimationGroupEventHandlerStream(animationGroup, createOptions, scheduler, options),
}));
export default Streamable_createAnimationGroupEventHandler;
