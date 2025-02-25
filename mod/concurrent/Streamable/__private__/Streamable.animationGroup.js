/// <reference types="./Streamable.animationGroup.d.ts" />

import { include, init, mixInstanceFactory, props, unsafeCast, } from "../../../__internal__/mixins.js";
import * as ReadonlyArray from "../../../collections/ReadonlyArray.js";
import * as ReadonlyObjectMap from "../../../collections/ReadonlyObjectMap.js";
import { DictionaryLike_get, DictionaryLike_keys, } from "../../../collections.js";
import * as Iterable from "../../../computations/Iterable.js";
import { StreamableLike_stream, } from "../../../concurrent.js";
import * as Publisher from "../../../events/Publisher.js";
import { isFunction, none, pipe, } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as Observable from "../../Observable.js";
import StreamMixin from "../../__mixins__/StreamMixin.js";
const AnimationGroupStream_create = /*@__PURE__*/ (() => {
    const AnimationGroupStream_eventSources = Symbol("AnimationGroupStream_delegate");
    return mixInstanceFactory(include(StreamMixin()), function AnimationGroupStream(instance, animationGroup, scheduler, animationScheduler, options) {
        const operator = Observable.switchMap((event) => pipe(Observable.mergeMany(pipe(animationGroup, ReadonlyObjectMap.entries(), Iterable.map(([key, factory]) => {
            const publisher = publishers[key];
            return pipe(isFunction(factory) ? factory(event) : factory, Observable.notify(publisher));
        }), ReadonlyArray.fromIterable())), Observable.ignoreElements(), Observable.subscribeOn(animationScheduler), Observable.startWith(true), Observable.endWith(false)), {
            innerType: Observable.DeferredObservableWithSideEffectsType,
        });
        init(StreamMixin(), instance, operator, scheduler, options);
        const publishers = (instance[AnimationGroupStream_eventSources] = pipe(animationGroup, ReadonlyObjectMap.map(_ => pipe(Publisher.create(), Disposable.addTo(instance)))));
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
const Streamable_animationGroup = ((animationGroup, creationOptions) => ({
    [StreamableLike_stream]: (scheduler, options) => AnimationGroupStream_create(animationGroup, scheduler, creationOptions?.animationScheduler ?? scheduler, options),
}));
export default Streamable_animationGroup;
