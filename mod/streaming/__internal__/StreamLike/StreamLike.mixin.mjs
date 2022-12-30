/// <reference types="./StreamLike.mixin.d.ts" />
import { mixin as mixin$1, include, init, props } from '../../../__internal__/mixins.mjs';
import { returns, pipe, none, unsafeCast } from '../../../functions.mjs';
import { MulticastObservableLike_observerCount, MulticastObservableLike_replay, ObservableLike_isEnumerable, ObservableLike_isRunnable, ReactiveContainerLike_sinkInto } from '../../../rx.mjs';
import { getObserverCount, getReplay } from '../../../rx/MulticastObservableLike.mjs';
import { sinkInto } from '../../../rx/ReactiveContainerLike.mjs';
import { create, publish } from '../../../rx/SubjectLike.mjs';
import multicast from '../../../rx/__internal__/ObservableLike/ObservableLike.multicast.mjs';
import { DispatcherLike_scheduler, DispatcherLike_dispatch } from '../../../scheduling.mjs';
import add from '../../../util/__internal__/DisposableLike/DisposableLike.add.mjs';
import delegatingMixin from '../../../util/__internal__/DisposableLike/DisposableLike.delegatingMixin.mjs';

const mixin = /*@__PURE__*/ (() => {
    return returns(mixin$1(include(delegatingMixin), function Stream(instance, op, scheduler, replay) {
        const subject = create({ replay });
        init(delegatingMixin, instance, subject);
        instance[DispatcherLike_scheduler] = scheduler;
        instance.subject = subject;
        instance.observable = pipe(subject, op, multicast(scheduler, { replay }), add(instance));
        return instance;
    }, props({
        subject: none,
        observable: none,
        [DispatcherLike_scheduler]: none,
    }), {
        get [MulticastObservableLike_observerCount]() {
            unsafeCast(this);
            return getObserverCount(this.observable);
        },
        get [MulticastObservableLike_replay]() {
            unsafeCast(this);
            return getReplay(this.observable);
        },
        [ObservableLike_isEnumerable]: false,
        [ObservableLike_isRunnable]: false,
        [DispatcherLike_dispatch](req) {
            pipe(this.subject, publish(req));
        },
        [ReactiveContainerLike_sinkInto](observer) {
            pipe(this.observable, sinkInto(observer));
        },
    }));
})();

export { mixin as default };
