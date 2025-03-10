/// <reference types="./Streamable.animationGroup.d.ts" />

import { include, init, mixInstanceFactory, props, unsafeCast, } from "../../../__internal__/mixins.js";
import * as ReadonlyArray from "../../../collections/ReadonlyArray.js";
import * as ReadonlyObjectMap from "../../../collections/ReadonlyObjectMap.js";
import { DictionaryLike_get, DictionaryLike_keys, } from "../../../collections.js";
import * as Computation from "../../../computations/Computation.js";
import * as Iterable from "../../../computations/Iterable.js";
import * as Publisher from "../../../computations/Publisher.js";
import { DeferredComputationWithSideEffects, StreamableLike_stream, } from "../../../computations.js";
import { isFunction, none, pipe, } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as PauseableScheduler from "../../../utils/PauseableScheduler.js";
import DelegatingPauseableMixin from "../../../utils/__mixins__/DelegatingPauseableMixin.js";
import { PauseableLike_resume, } from "../../../utils.js";
import * as Observable from "../../Observable.js";
import StreamMixin from "../../__mixins__/StreamMixin.js";
const Streamable_animationGroup = 
/*@__PURE__*/ (() => {
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
    const AnimationGroupStream_create = mixInstanceFactory(include(StreamMixin(), DelegatingPauseableMixin), function AnimationGroupStream(animationGroup, scheduler, animationScheduler, options) {
        const pauseableScheduler = PauseableScheduler.create(animationScheduler);
        const operator = Computation.flatMap(ObservableModule)("switchAll", (event) => pipe(animationGroup, ReadonlyObjectMap.entries(), Iterable.map(([key, factory]) => {
            const publisher = publishers[key];
            return pipe(isFunction(factory) ? factory(event) : factory, Computation.notify(ObservableModule)(publisher), Observable.subscribeOn(pauseableScheduler));
        }), ReadonlyArray.fromIterable(), Computation.mergeMany(ObservableModule), Computation.ignoreElements(ObservableModule)(), Computation.startWith(ObservableModule)(true), Computation.endWith(ObservableModule)(false)), {
            innerType: DeferredComputationWithSideEffects,
        });
        init(StreamMixin(), this, operator, scheduler, options);
        init(DelegatingPauseableMixin, this, pauseableScheduler);
        pipe(this, Disposable.add(pauseableScheduler));
        const publishers = (this[AnimationGroupStream_eventSources] = pipe(animationGroup, ReadonlyObjectMap.map(_ => pipe(Publisher.create(), Disposable.addTo(this)))));
        this[PauseableLike_resume]();
        return this;
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
    return (animationGroup, creationOptions) => ({
        [StreamableLike_stream]: (scheduler, options) => AnimationGroupStream_create(animationGroup, scheduler, creationOptions?.animationScheduler ?? scheduler, options),
    });
})();
export default Streamable_animationGroup;
