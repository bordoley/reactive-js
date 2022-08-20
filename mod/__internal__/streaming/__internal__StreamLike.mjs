/// <reference types="./__internal__StreamLike.d.ts" />
import { returns, pipe, none, unsafeCast } from '../../functions.mjs';
import { c as createSubject, M as MulticastObservableLike_observerCount, m as MulticastObservableLike_replay, O as ObservableLike_isEnumerable, a as ObservableLike_isRunnable, R as ReactiveContainerLike_sinkInto } from '../../rx-fdbb13e3.mjs';
import { getObserverCount, getReplay } from '../../rx/MulticastObservableLike.mjs';
import { sinkInto } from '../../rx/ReactiveContainerLike.mjs';
import { publish } from '../../rx/SubjectLike.mjs';
import { DispatcherLike_scheduler, DispatcherLike_dispatch } from '../../scheduling.mjs';
import { multicast } from '../rx/__internal__ObservableLike.mjs';
import { add } from '../util/__internal__DisposableLike.mjs';
import { delegatingDisposableMixin } from '../util/__internal__Disposables.mjs';
import { mixin, include, init, props, createInstanceFactory } from '../util/__internal__Objects.mjs';

const streamMixin = /*@__PURE__*/ (() => {
    return returns(mixin(include(delegatingDisposableMixin), function Stream(instance, op, scheduler, replay) {
        const subject = createSubject({ replay });
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
