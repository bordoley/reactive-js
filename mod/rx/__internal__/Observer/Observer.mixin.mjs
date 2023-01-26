/// <reference types="./Observer.mixin.d.ts" />
import { createInstanceFactory, mix, init, props } from '../../../__internal__/mixins.mjs';
import { getLength, pipe, isEmpty, none, unsafeCast, isNone, returns } from '../../../functions.mjs';
import { SinkLike_notify, ObserverLike_scheduler, ObserverLike_dispatcher } from '../../../rx.mjs';
import { DispatcherLike_scheduler, DispatcherLike_dispatch } from '../../../scheduling.mjs';
import Continuation_yield_ from '../../../scheduling/__internal__/Continuation/Continuation.yield.mjs';
import { DisposableLike_error } from '../../../util.mjs';
import Disposable_addToIgnoringChildErrors from '../../../util/__internal__/Disposable/Disposable.addToIgnoringChildErrors.mjs';
import Disposable_dispose from '../../../util/__internal__/Disposable/Disposable.dispose.mjs';
import Disposable_isDisposed from '../../../util/__internal__/Disposable/Disposable.isDisposed.mjs';
import Disposable_mixin from '../../../util/__internal__/Disposable/Disposable.mixin.mjs';
import Disposable_onComplete from '../../../util/__internal__/Disposable/Disposable.onComplete.mjs';
import Disposable_onDisposed from '../../../util/__internal__/Disposable/Disposable.onDisposed.mjs';
import Observer_getScheduler from './Observer.getScheduler.mjs';
import Observer_schedule from './Observer.schedule.mjs';

const createObserverDispatcher = /*@__PURE__*/ (() => {
    const scheduleDrainQueue = (dispatcher) => {
        if (getLength(dispatcher.nextQueue) === 1) {
            const { observer } = dispatcher;
            pipe(observer, Observer_schedule(dispatcher.continuation), Disposable_onComplete(dispatcher.onContinuationDispose));
        }
    };
    return createInstanceFactory(mix(Disposable_mixin, function ObserverDispatcher(instance, observer) {
        init(Disposable_mixin, instance);
        instance.observer = observer;
        instance.nextQueue = [];
        instance.continuation = () => {
            const { nextQueue, observer } = instance;
            while (getLength(nextQueue) > 0) {
                const next = nextQueue.shift();
                observer[SinkLike_notify](next);
                Continuation_yield_();
            }
        };
        instance.onContinuationDispose = () => {
            if (Disposable_isDisposed(instance)) {
                pipe(observer, Disposable_dispose(instance[DisposableLike_error]));
            }
        };
        pipe(instance, Disposable_onDisposed(e => {
            if (isEmpty(instance.nextQueue)) {
                pipe(observer, Disposable_dispose(e));
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
            return Observer_getScheduler(this.observer);
        },
        [DispatcherLike_dispatch](next) {
            if (!Disposable_isDisposed(this)) {
                this.nextQueue.push(next);
                scheduleDrainQueue(this);
            }
        },
    }));
})();
const Observer_mixin = 
/*@__PURE__*/ (() => {
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
                dispatcher = pipe(createObserverDispatcher(this), Disposable_addToIgnoringChildErrors(this));
                this.dispatcher = dispatcher;
            }
            return dispatcher;
        },
    }), returns);
})();

export { Observer_mixin as default };
