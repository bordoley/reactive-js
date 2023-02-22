/// <reference types="./Stream.mixin.d.ts" />

import { include, init, mix, props, } from "../../../__internal__/mixins.js";
import { none, pipe, returns, unsafeCast } from "../../../functions.js";
import { MulticastObservableLike_observerCount, MulticastObservableLike_replay, ObservableLike_isEnumerable, ObservableLike_isRunnable, ReactiveContainerLike_sinkInto, } from "../../../rx.js";
import MulticastObservable_getObserverCount from "../../../rx/MulticastObservable/__internal__/MulticastObservable.getObserverCount.js";
import MulticastObservable_getReplay from "../../../rx/MulticastObservable/__internal__/MulticastObservable.getReplay.js";
import Observable_multicast from "../../../rx/Observable/__internal__/Observable.multicast.js";
import ReactiveContainer_sinkInto from "../../../rx/ReactiveContainer/__internal__/ReactiveContainer.sinkInto.js";
import Subject_create from "../../../rx/Subject/__internal__/Subject.create.js";
import Subject_publish from "../../../rx/Subject/__internal__/Subject.publish.js";
import { DispatcherLike_dispatch, DispatcherLike_scheduler, } from "../../../scheduling.js";
import add from "../../../util/Disposable/__internal__/Disposable.add.js";
import Disposable_delegatingMixin from "../../../util/Disposable/__internal__/Disposable.delegatingMixin.js";
const Stream_mixin = /*@__PURE__*/ (() => {
    const StreamMixin_subject = Symbol("StreamMixin_subject");
    const StreamMixin_observable = Symbol("StreamMixin_observable");
    return returns(mix(include(Disposable_delegatingMixin()), function StreamMixin(instance, op, scheduler, replay) {
        const subject = Subject_create({ replay });
        init(Disposable_delegatingMixin(), instance, subject);
        instance[DispatcherLike_scheduler] = scheduler;
        instance[StreamMixin_subject] = subject;
        instance[StreamMixin_observable] = pipe(subject, op, Observable_multicast(scheduler, { replay }), add(instance));
        return instance;
    }, props({
        [StreamMixin_subject]: none,
        [StreamMixin_observable]: none,
        [DispatcherLike_scheduler]: none,
    }), {
        get [MulticastObservableLike_observerCount]() {
            unsafeCast(this);
            return MulticastObservable_getObserverCount(this[StreamMixin_observable]);
        },
        get [MulticastObservableLike_replay]() {
            unsafeCast(this);
            return MulticastObservable_getReplay(this[StreamMixin_observable]);
        },
        [ObservableLike_isEnumerable]: false,
        [ObservableLike_isRunnable]: false,
        [DispatcherLike_dispatch](req) {
            pipe(this[StreamMixin_subject], Subject_publish(req));
        },
        [ReactiveContainerLike_sinkInto](observer) {
            pipe(this[StreamMixin_observable], ReactiveContainer_sinkInto(observer));
        },
    }));
})();
export default Stream_mixin;
