/// <reference types="./ObserverLike.mixin.d.ts" />
import { createInstanceFactory, mix, init, props } from '../../../__internal__/mixins.mjs';
import { getLength, pipe, isEmpty, none, unsafeCast, isNone, returns } from '../../../functions.mjs';
import { SinkLike_notify, ObserverLike_scheduler, ObserverLike_dispatcher } from '../../../rx.mjs';
import { DispatcherLike_scheduler, DispatcherLike_dispatch } from '../../../scheduling.mjs';
import { yield_ } from '../../../scheduling/ContinuationLike.mjs';
import { DisposableLike_exception } from '../../../util.mjs';
import { onComplete, isDisposed, dispose, onDisposed, addToIgnoringChildErrors } from '../../../util/DisposableLike.mjs';
import DisposableLike__disposableMixin from '../../../util/__internal__/DisposableLike/DisposableLike.mixin.mjs';
import ObserverLike__getScheduler from './ObserverLike.getScheduler.mjs';
import ObserverLike__schedule from './ObserverLike.schedule.mjs';

const createObserverDispatcher = /*@__PURE__*/ (() => {
    const scheduleDrainQueue = (dispatcher) => {
        if (getLength(dispatcher.nextQueue) === 1) {
            const { observer } = dispatcher;
            pipe(observer, ObserverLike__schedule(dispatcher.continuation), onComplete(dispatcher.onContinuationDispose));
        }
    };
    return createInstanceFactory(mix(DisposableLike__disposableMixin, function ObserverDispatcher(instance, observer) {
        init(DisposableLike__disposableMixin, instance);
        instance.observer = observer;
        instance.nextQueue = [];
        instance.continuation = () => {
            const { nextQueue, observer } = instance;
            while (getLength(nextQueue) > 0) {
                const next = nextQueue.shift();
                observer[SinkLike_notify](next);
                yield_();
            }
        };
        instance.onContinuationDispose = () => {
            if (isDisposed(instance)) {
                pipe(observer, dispose(instance[DisposableLike_exception]));
            }
        };
        pipe(instance, onDisposed(e => {
            if (isEmpty(instance.nextQueue)) {
                pipe(observer, dispose(e));
            }
        }));
        return instance;
    }, props({
        continuation: none,
        nextQueue: none,
        observer: none,
        onContinuationDispose: none,
    }), {
        get [DispatcherLike_scheduler]() {
            unsafeCast(this);
            return ObserverLike__getScheduler(this.observer);
        },
        [DispatcherLike_dispatch](next) {
            if (!isDisposed(this)) {
                this.nextQueue.push(next);
                scheduleDrainQueue(this);
            }
        },
    }));
})();
const ObserverLike__observerMixin = /*@__PURE__*/ (() => {
    return pipe(mix(function ObserverMixin(instance, scheduler) {
        instance[ObserverLike_scheduler] = scheduler;
        return instance;
    }, props({
        [ObserverLike_scheduler]: none,
        dispatcher: none,
    }), {
        get [ObserverLike_dispatcher]() {
            unsafeCast(this);
            let { dispatcher } = this;
            if (isNone(dispatcher)) {
                dispatcher = pipe(createObserverDispatcher(this), addToIgnoringChildErrors(this));
                this.dispatcher = dispatcher;
            }
            return dispatcher;
        },
    }), returns);
})();

export { ObserverLike__observerMixin as default };
