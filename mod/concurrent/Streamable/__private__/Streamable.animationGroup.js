/// <reference types="./Streamable.animationGroup.d.ts" />

import { include, init, mixInstanceFactory, props, unsafeCast, } from "../../../__internal__/mixins.js";
import * as ReadonlyArray from "../../../collections/ReadonlyArray.js";
import * as ReadonlyObjectMap from "../../../collections/ReadonlyObjectMap.js";
import { DictionaryLike_get, DictionaryLike_keys, } from "../../../collections.js";
import { StreamableLike_stream, } from "../../../concurrent.js";
import * as Publisher from "../../../events/Publisher.js";
import { EventListenerLike_notify, } from "../../../events.js";
import { isFunction, none, pipe, } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as Observable from "../../Observable.js";
import DelegatingStreamMixin from "../../__mixins__/DelegatingStreamMixin.js";
import Streamable_createEventHandler from "./Streamable.eventHandler.js";
const Streamable_createAnimationGroupStream = 
/*@__PURE__*/ (() => {
    const AnimationGroupStream_eventSources = Symbol("AnimationGroupStream_delegate");
    return mixInstanceFactory(include(DelegatingStreamMixin()), function AnimationGroupStream(instance, animationGroup, creationOptions, scheduler, streamOptions) {
        const streamDelegate = Streamable_createEventHandler((event) => Observable.mergeMany(pipe(animationGroup, ReadonlyObjectMap.map((factory, key) => pipe(isFunction(factory) ? factory(event) : factory, Observable.forEach((value) => {
            const publisher = publishers[key];
            publisher?.[EventListenerLike_notify](value);
        }), Observable.ignoreElements(), Observable.subscribeOn(animationScheduler))), ReadonlyObjectMap.values(), ReadonlyArray.fromIterable())), creationOptions)[StreamableLike_stream](scheduler, streamOptions);
        const publishers = pipe(animationGroup, ReadonlyObjectMap.map(_ => pipe(Publisher.create(), Disposable.addTo(streamDelegate))));
        const animationScheduler = creationOptions?.scheduler ?? scheduler;
        init(DelegatingStreamMixin(), instance, streamDelegate);
        instance[AnimationGroupStream_eventSources] = publishers;
        return instance;
    }, props({
        [AnimationGroupStream_eventSources]: none,
    }), {
        get [DictionaryLike_keys]() {
            unsafeCast(this);
            return pipe(this[AnimationGroupStream_eventSources], ReadonlyObjectMap.keys());
        },
        [DictionaryLike_get](index) {
            return this[AnimationGroupStream_eventSources][index];
        },
    });
})();
const Streamable_animationGroup = ((animationGroup, createOptions) => ({
    [StreamableLike_stream]: (scheduler, options) => Streamable_createAnimationGroupStream(animationGroup, createOptions, scheduler, options),
}));
export default Streamable_animationGroup;
