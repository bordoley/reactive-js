/// <reference types="./Streamable.animationGroup.d.ts" />

import { include, init, mixInstanceFactory, props, unsafeCast, } from "../../../__internal__/mixins.js";
import * as ReadonlyArray from "../../../collections/ReadonlyArray.js";
import * as ReadonlyObjectMap from "../../../collections/ReadonlyObjectMap.js";
import { DictionaryLike_get, DictionaryLike_keys, } from "../../../collections.js";
import * as Computation from "../../../computations/Computation.js";
import * as Iterable from "../../../computations/Iterable.js";
import { DeferredComputationWithSideEffectsType, } from "../../../computations.js";
import { PauseableLike_resume, StreamableLike_stream, } from "../../../concurrent.js";
import * as Publisher from "../../../events/Publisher.js";
import { isFunction, none, pipe, } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as Observable from "../../Observable.js";
import * as PauseableScheduler from "../../PauseableScheduler.js";
import DelegatingPauseableMixin from "../../__mixins__/DelegatingPauseableMixin.js";
import StreamMixin from "../../__mixins__/StreamMixin.js";
const AnimationGroupStream_create = /*@__PURE__*/ (() => {
    const AnimationGroupStream_eventSources = Symbol("AnimationGroupStream_delegate");
    const ObservableModule = {
        concat: Observable.concat,
        forEach: Observable.forEach,
        fromReadonlyArray: Observable.fromReadonlyArray,
        keep: Observable.keep,
        map: Observable.map,
        merge: Observable.merge,
        switchAll: Observable.switchAll,
    };
    return mixInstanceFactory(include(StreamMixin(), DelegatingPauseableMixin), function AnimationGroupStream(instance, animationGroup, scheduler, animationScheduler, options) {
        const pauseableScheduler = PauseableScheduler.create(animationScheduler);
        const operator = Computation.flatMap(ObservableModule, "switchAll")((event) => pipe(animationGroup, ReadonlyObjectMap.entries(), Iterable.map(([key, factory]) => {
            const publisher = publishers[key];
            return pipe(isFunction(factory) ? factory(event) : factory, Computation.notify(ObservableModule)(publisher), Observable.subscribeOn(pauseableScheduler));
        }), ReadonlyArray.fromIterable(), Computation.mergeMany(ObservableModule), Computation.ignoreElements(ObservableModule)(), Computation.startWith(ObservableModule)(true), Computation.endWith(ObservableModule)(false)), {
            innerType: DeferredComputationWithSideEffectsType,
        });
        init(StreamMixin(), instance, operator, scheduler, options);
        init(DelegatingPauseableMixin, instance, pauseableScheduler);
        pipe(instance, Disposable.add(pauseableScheduler));
        const publishers = (instance[AnimationGroupStream_eventSources] = pipe(animationGroup, ReadonlyObjectMap.map(_ => pipe(Publisher.create(), Disposable.addTo(instance)))));
        instance[PauseableLike_resume]();
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
