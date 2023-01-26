/// <reference types="./Stream.mixin.d.ts" />
import { mix, include, init, props } from '../../../__internal__/mixins.mjs';
import { returns, pipe, none, unsafeCast } from '../../../functions.mjs';
import { MulticastObservableLike_observerCount, MulticastObservableLike_replay, ObservableLike_isEnumerable, ObservableLike_isRunnable, ReactiveContainerLike_sinkInto } from '../../../rx.mjs';
import MulticastObservable_getObserverCount from '../../../rx/__internal__/MulticastObservable/MulticastObservable.getObserverCount.mjs';
import MulticastObservable_getReplay from '../../../rx/__internal__/MulticastObservable/MulticastObservable.getReplay.mjs';
import Observable_multicast from '../../../rx/__internal__/Observable/Observable.multicast.mjs';
import ReactiveContainer_sinkInto from '../../../rx/__internal__/ReactiveContainer/ReactiveContainer.sinkInto.mjs';
import Subject_create from '../../../rx/__internal__/Subject/Subject.create.mjs';
import Subject_publish from '../../../rx/__internal__/Subject/Subject.publish.mjs';
import { DispatcherLike_scheduler, DispatcherLike_dispatch } from '../../../scheduling.mjs';
import Disposable_add from '../../../util/__internal__/Disposable/Disposable.add.mjs';
import Disposable_delegatingMixin from '../../../util/__internal__/Disposable/Disposable.delegatingMixin.mjs';

const Stream_mixin = /*@__PURE__*/ (() => {
    return returns(mix(include(Disposable_delegatingMixin), function Stream(instance, op, scheduler, replay) {
        const subject = Subject_create({ replay });
        init(Disposable_delegatingMixin, instance, subject);
        instance[DispatcherLike_scheduler] = scheduler;
        instance.subject = subject;
        instance.observable = pipe(subject, op, Observable_multicast(scheduler, { replay }), Disposable_add(instance));
        return instance;
    }, props({
        subject: none,
        observable: none,
        [DispatcherLike_scheduler]: none,
    }), {
        get [MulticastObservableLike_observerCount]() {
            unsafeCast(this);
            return MulticastObservable_getObserverCount(this.observable);
        },
        get [MulticastObservableLike_replay]() {
            unsafeCast(this);
            return MulticastObservable_getReplay(this.observable);
        },
        [ObservableLike_isEnumerable]: false,
        [ObservableLike_isRunnable]: false,
        [DispatcherLike_dispatch](req) {
            pipe(this.subject, Subject_publish(req));
        },
        [ReactiveContainerLike_sinkInto](observer) {
            pipe(this.observable, ReactiveContainer_sinkInto(observer));
        },
    }));
})();

export { Stream_mixin as default };
