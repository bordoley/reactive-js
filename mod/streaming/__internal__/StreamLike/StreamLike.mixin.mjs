/// <reference types="./StreamLike.mixin.d.ts" />
import { mix, include, init, props } from '../../../__internal__/mixins.mjs';
import { returns, pipe, none, unsafeCast } from '../../../functions.mjs';
import { MulticastObservableLike_observerCount, MulticastObservableLike_replay, ObservableLike_isEnumerable, ObservableLike_isRunnable, ReactiveContainerLike_sinkInto } from '../../../rx.mjs';
import MulticastObservableLike__getObserverCount from '../../../rx/__internal__/MulticastObservableLike/MulticastObservableLike.getObserverCount.mjs';
import MulticastObservableLike__getReplay from '../../../rx/__internal__/MulticastObservableLike/MulticastObservableLike.getReplay.mjs';
import ObservableLike__multicast from '../../../rx/__internal__/ObservableLike/ObservableLike.multicast.mjs';
import ReactiveContainerLike__sinkInto from '../../../rx/__internal__/ReactiveContainerLike/ReactiveContainerLike.sinkInto.mjs';
import SubjectLike__create from '../../../rx/__internal__/SubjectLike/SubjectLike.create.mjs';
import SubjectLike__publish from '../../../rx/__internal__/SubjectLike/SubjectLike.publish.mjs';
import { DispatcherLike_scheduler, DispatcherLike_dispatch } from '../../../scheduling.mjs';
import DisposableLike__add from '../../../util/__internal__/DisposableLike/DisposableLike.add.mjs';
import DisposableLike__delegatingMixin from '../../../util/__internal__/DisposableLike/DisposableLike.delegatingMixin.mjs';

const StreamLike__mixin = /*@__PURE__*/ (() => {
    return returns(mix(include(DisposableLike__delegatingMixin), function Stream(instance, op, scheduler, replay) {
        const subject = SubjectLike__create({ replay });
        init(DisposableLike__delegatingMixin, instance, subject);
        instance[DispatcherLike_scheduler] = scheduler;
        instance.subject = subject;
        instance.observable = pipe(subject, op, ObservableLike__multicast(scheduler, { replay }), DisposableLike__add(instance));
        return instance;
    }, props({
        subject: none,
        observable: none,
        [DispatcherLike_scheduler]: none,
    }), {
        get [MulticastObservableLike_observerCount]() {
            unsafeCast(this);
            return MulticastObservableLike__getObserverCount(this.observable);
        },
        get [MulticastObservableLike_replay]() {
            unsafeCast(this);
            return MulticastObservableLike__getReplay(this.observable);
        },
        [ObservableLike_isEnumerable]: false,
        [ObservableLike_isRunnable]: false,
        [DispatcherLike_dispatch](req) {
            pipe(this.subject, SubjectLike__publish(req));
        },
        [ReactiveContainerLike_sinkInto](observer) {
            pipe(this.observable, ReactiveContainerLike__sinkInto(observer));
        },
    }));
})();

export { StreamLike__mixin as default };
