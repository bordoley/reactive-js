/// <reference types="./ObserverLike.mixin.d.ts" />
import { createInstanceFactory, mix, init, props } from '../../../__internal__/mixins.mjs';
import { getLength, pipe, isEmpty, none, unsafeCast, isNone, returns } from '../../../functions.mjs';
import { SinkLike_notify, ObserverLike_scheduler, ObserverLike_dispatcher } from '../../../rx.mjs';
import { DispatcherLike_scheduler, DispatcherLike_dispatch } from '../../../scheduling.mjs';
import ContinuationLike__yield_ from '../../../scheduling/__internal__/ContinuationLike/ContinuationLike.yield.mjs';
import { DisposableLike_error } from '../../../util.mjs';
import DisposableLike__addToIgnoringChildErrors from '../../../util/__internal__/DisposableLike/DisposableLike.addToIgnoringChildErrors.mjs';
import DisposableLike__dispose from '../../../util/__internal__/DisposableLike/DisposableLike.dispose.mjs';
import DisposableLike__isDisposed from '../../../util/__internal__/DisposableLike/DisposableLike.isDisposed.mjs';
import DisposableLike__mixin from '../../../util/__internal__/DisposableLike/DisposableLike.mixin.mjs';
import DisposableLike__onComplete from '../../../util/__internal__/DisposableLike/DisposableLike.onComplete.mjs';
import DisposableLike__onDisposed from '../../../util/__internal__/DisposableLike/DisposableLike.onDisposed.mjs';
import ObserverLike__getScheduler from './ObserverLike.getScheduler.mjs';
import ObserverLike__schedule from './ObserverLike.schedule.mjs';

const createObserverDispatcher = /*@__PURE__*/ (() => {
    const scheduleDrainQueue = (dispatcher) => {
        if (getLength(dispatcher.nextQueue) === 1) {
            const { observer } = dispatcher;
            pipe(observer, ObserverLike__schedule(dispatcher.continuation), DisposableLike__onComplete(dispatcher.onContinuationDispose));
        }
    };
    return createInstanceFactory(mix(DisposableLike__mixin, function ObserverDispatcher(instance, observer) {
        init(DisposableLike__mixin, instance);
        instance.observer = observer;
        instance.nextQueue = [];
        instance.continuation = () => {
            const { nextQueue, observer } = instance;
            while (getLength(nextQueue) > 0) {
                const next = nextQueue.shift();
                observer[SinkLike_notify](next);
                ContinuationLike__yield_();
            }
        };
        instance.onContinuationDispose = () => {
            if (DisposableLike__isDisposed(instance)) {
                pipe(observer, DisposableLike__dispose(instance[DisposableLike_error]));
            }
        };
        pipe(instance, DisposableLike__onDisposed(e => {
            if (isEmpty(instance.nextQueue)) {
                pipe(observer, DisposableLike__dispose(e));
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
            if (!DisposableLike__isDisposed(this)) {
                this.nextQueue.push(next);
                scheduleDrainQueue(this);
            }
        },
    }));
})();
const ObserverLike__mixin = /*@__PURE__*/ (() => {
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
                dispatcher = pipe(createObserverDispatcher(this), DisposableLike__addToIgnoringChildErrors(this));
                this.dispatcher = dispatcher;
            }
            return dispatcher;
        },
    }), returns);
})();

export { ObserverLike__mixin as default };
