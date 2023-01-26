/// <reference types="./Stream.mixin.d.ts" />
import { mix, include, init, props } from '../../../__internal__/mixins.mjs';
import { returns, pipe, none, unsafeCast } from '../../../functions.mjs';
import { MulticastObservableLike_observerCount, MulticastObservableLike_replay, ObservableLike_isEnumerable, ObservableLike_isRunnable, ReactiveContainerLike_sinkInto } from '../../../rx.mjs';
import MulticastObservable$getObserverCount from '../../../rx/__internal__/MulticastObservable/MulticastObservable.getObserverCount.mjs';
import MulticastObservable$getReplay from '../../../rx/__internal__/MulticastObservable/MulticastObservable.getReplay.mjs';
import Observable$multicast from '../../../rx/__internal__/Observable/Observable.multicast.mjs';
import ReactiveContainer$sinkInto from '../../../rx/__internal__/ReactiveContainer/ReactiveContainer.sinkInto.mjs';
import Subject$create from '../../../rx/__internal__/Subject/Subject.create.mjs';
import Subject$publish from '../../../rx/__internal__/Subject/Subject.publish.mjs';
import { DispatcherLike_scheduler, DispatcherLike_dispatch } from '../../../scheduling.mjs';
import Disposable$add from '../../../util/__internal__/Disposable/Disposable.add.mjs';
import Disposable$delegatingMixin from '../../../util/__internal__/Disposable/Disposable.delegatingMixin.mjs';

const Stream$mixin = /*@__PURE__*/ (() => {
    return returns(mix(include(Disposable$delegatingMixin), function Stream(instance, op, scheduler, replay) {
        const subject = Subject$create({ replay });
        init(Disposable$delegatingMixin, instance, subject);
        instance[DispatcherLike_scheduler] = scheduler;
        instance.subject = subject;
        instance.observable = pipe(subject, op, Observable$multicast(scheduler, { replay }), Disposable$add(instance));
        return instance;
    }, props({
        subject: none,
        observable: none,
        [DispatcherLike_scheduler]: none,
    }), {
        get [MulticastObservableLike_observerCount]() {
            unsafeCast(this);
            return MulticastObservable$getObserverCount(this.observable);
        },
        get [MulticastObservableLike_replay]() {
            unsafeCast(this);
            return MulticastObservable$getReplay(this.observable);
        },
        [ObservableLike_isEnumerable]: false,
        [ObservableLike_isRunnable]: false,
        [DispatcherLike_dispatch](req) {
            pipe(this.subject, Subject$publish(req));
        },
        [ReactiveContainerLike_sinkInto](observer) {
            pipe(this.observable, ReactiveContainer$sinkInto(observer));
        },
    }));
})();

export { Stream$mixin as default };
