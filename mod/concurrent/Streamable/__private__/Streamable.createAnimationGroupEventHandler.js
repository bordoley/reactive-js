/// <reference types="./Streamable.createAnimationGroupEventHandler.d.ts" />

import { createInstanceFactory, include, init, mix, props, unsafeCast, } from "../../../__internal__/mixins.js";
import { DictionaryLike_get, DictionaryLike_keys, } from "../../../collections.js";
import * as Enumerable from "../../../collections/Enumerable.js";
import * as ReadonlyObjectMap from "../../../collections/ReadonlyObjectMap.js";
import { StreamableLike_stream, } from "../../../concurrent.js";
import { SinkLike_notify, } from "../../../events.js";
import * as Publisher from "../../../events/Publisher.js";
import { isFunction, none, pipe, } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as Observable from "../../Observable.js";
import DelegatingStreamMixin from "../../__mixins__/DelegatingStreamMixin.js";
import Streamable_createEventHandler from "./Streamable.createEventHandler.js";
const Streamable_createAnimationGroupEventHandlerStream = 
/*@__PURE__*/ (() => {
    const AnimationEventHandlerStream_delegate = Symbol("AnimationEventHandlerStream_delegate");
    return createInstanceFactory(mix(include(DelegatingStreamMixin()), function AnimationEventHandlerStream(instance, animationGroup, creationOptions, scheduler, streamOptions) {
        const streamDelegate = Streamable_createEventHandler((event) => {
            const observables = pipe(animationGroup, ReadonlyObjectMap.map((factory, key) => pipe(Observable.animate(isFunction(factory) ? factory(event) : factory), Observable.forEach((value) => {
                const publisher = publishers[key];
                publisher?.[SinkLike_notify](value);
            }), Observable.ignoreElements())));
            const deferredAnimatedObservables = pipe(observables, ReadonlyObjectMap.values(), Enumerable.map(Observable.subscribeOn(animationScheduler)), Enumerable.toReadonlyArray());
            return Observable.mergeMany(deferredAnimatedObservables);
        }, creationOptions)[StreamableLike_stream](scheduler, streamOptions);
        init(DelegatingStreamMixin(), instance, streamDelegate);
        const publishers = pipe(animationGroup, ReadonlyObjectMap.map(_ => pipe(Publisher.create(), Disposable.addTo(instance))));
        const animationScheduler = creationOptions?.scheduler ?? scheduler;
        instance[AnimationEventHandlerStream_delegate] = publishers;
        return instance;
    }, props({
        [AnimationEventHandlerStream_delegate]: none,
    }), {
        get [DictionaryLike_keys]() {
            unsafeCast(this);
            return pipe(this[AnimationEventHandlerStream_delegate], ReadonlyObjectMap.keys());
        },
        [DictionaryLike_get](index) {
            return this[AnimationEventHandlerStream_delegate][index];
        },
    }));
})();
const Streamable_createAnimationGroupEventHandler = ((animationGroup, createOptions) => ({
    [StreamableLike_stream]: (scheduler, options) => Streamable_createAnimationGroupEventHandlerStream(animationGroup, createOptions, scheduler, options),
}));
export default Streamable_createAnimationGroupEventHandler;
