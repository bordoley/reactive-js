/// <reference types="./Streamable.animationGroup.d.ts" />

import { include, init, mixInstanceFactory, props, unsafeCast, } from "../../../__internal__/mixins.js";
import * as ReadonlyArray from "../../../collections/ReadonlyArray.js";
import * as ReadonlyObjectMap from "../../../collections/ReadonlyObjectMap.js";
import { DictionaryLike_get, DictionaryLike_keys, } from "../../../collections.js";
import { StreamableLike_stream, } from "../../../concurrent.js";
import * as Publisher from "../../../events/Publisher.js";
import { compose, isFunction, none, pipe, } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import Observable_notify from "../../Observable/__private__/Observable.notify.js";
import * as Observable from "../../Observable.js";
import { SingleUseObservableLike_observer } from "../../__internal__/SingleUseObservable.js";
import * as SingleUseObservable from "../../__internal__/SingleUseObservable.js";
import DelegatingDispatcherMixin from "../../__mixins__/DelegatingDispatcherMixin.js";
import DelegatingMulticastObservableMixin from "../../__mixins__/DelegatingMulticastObservableMixin.js";
const AnimationGroupStream_create = /*@__PURE__*/ (() => {
    const AnimationGroupStream_eventSources = Symbol("AnimationGroupStream_delegate");
    return mixInstanceFactory(include(DelegatingDispatcherMixin(), DelegatingMulticastObservableMixin()), function AnimationGroupStream(instance, animationGroup, scheduler, animationScheduler, options) {
        const singleUseObservable = SingleUseObservable.create();
        const delegate = pipe(singleUseObservable, Observable.switchMap(compose((event) => Observable.mergeMany(pipe(animationGroup, ReadonlyObjectMap.map((factory, key) => {
            const publisher = publishers[key];
            return pipe(isFunction(factory) ? factory(event) : factory, Observable_notify(publisher));
        }), ReadonlyObjectMap.values(), ReadonlyArray.fromIterable())), Observable.ignoreElements(), Observable.subscribeOn(animationScheduler), Observable.startWith(true), Observable.endWith(false)), {
            innerType: Observable.DeferredObservableWithSideEffectsType,
        }), Observable.multicast(scheduler, options));
        init(DelegatingDispatcherMixin(), instance, singleUseObservable[SingleUseObservableLike_observer]);
        init(DelegatingMulticastObservableMixin(), instance, delegate);
        const publishers = (instance[AnimationGroupStream_eventSources] = pipe(animationGroup, ReadonlyObjectMap.map(_ => pipe(Publisher.create(), Disposable.addTo(instance)))));
        pipe(delegate, Disposable.addTo(instance));
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
