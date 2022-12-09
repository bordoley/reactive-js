/// <reference types="./StreamLike.internal.d.ts" />
import { returns, pipe, none, unsafeCast } from '../../functions.mjs';
import { MulticastObservableLike_observerCount, MulticastObservableLike_replay, ObservableLike_isEnumerable, ObservableLike_isRunnable, ReactiveContainerLike_sinkInto } from '../../rx.mjs';
import { getObserverCount, getReplay } from '../../rx/MulticastObservableLike.mjs';
import { sinkInto } from '../../rx/ReactiveContainerLike.mjs';
import { create, publish } from '../../rx/SubjectLike.mjs';
import { DispatcherLike_scheduler, DispatcherLike_dispatch } from '../../scheduling.mjs';
import { add } from '../../util/__internal__/DisposableLike/DisposableLike.add.mjs';
import { mixin, include, init, props, createInstanceFactory } from '../mixins.mjs';
import { multicast } from '../rx/ObservableLike.operators.mjs';
import { delegatingDisposableMixin } from '../util/DisposableLike.mixins.mjs';

const streamMixin = /*@__PURE__*/ (() => {
    return returns(mixin(include(delegatingDisposableMixin), function Stream(instance, op, scheduler, replay) {
        const subject = create({ replay });
        init(delegatingDisposableMixin, instance, subject);
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
const createStream = /*@__PURE__*/ (() => {
    const createStreamInternal = createInstanceFactory(streamMixin());
    return (op, scheduler, options) => {
        const { replay = 0 } = options !== null && options !== void 0 ? options : {};
        return createStreamInternal(op, scheduler, replay);
    };
})();

export { createStream, streamMixin };
