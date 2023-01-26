/// <reference types="./Observer.mixin.d.ts" />
import { createInstanceFactory, mix, init, props } from '../../../__internal__/mixins.mjs';
import { getLength, pipe, isEmpty, none, unsafeCast, isNone, returns } from '../../../functions.mjs';
import { SinkLike_notify, ObserverLike_scheduler, ObserverLike_dispatcher } from '../../../rx.mjs';
import { DispatcherLike_scheduler, DispatcherLike_dispatch } from '../../../scheduling.mjs';
import Continuation$yield_ from '../../../scheduling/__internal__/Continuation/Continuation.yield.mjs';
import { DisposableLike_error } from '../../../util.mjs';
import Disposable$addToIgnoringChildErrors from '../../../util/__internal__/Disposable/Disposable.addToIgnoringChildErrors.mjs';
import Disposable$dispose from '../../../util/__internal__/Disposable/Disposable.dispose.mjs';
import Disposable$isDisposed from '../../../util/__internal__/Disposable/Disposable.isDisposed.mjs';
import Disposable$mixin from '../../../util/__internal__/Disposable/Disposable.mixin.mjs';
import Disposable$onComplete from '../../../util/__internal__/Disposable/Disposable.onComplete.mjs';
import Disposable$onDisposed from '../../../util/__internal__/Disposable/Disposable.onDisposed.mjs';
import Observer$getScheduler from './Observer.getScheduler.mjs';
import Observer$schedule from './Observer.schedule.mjs';

const createObserverDispatcher = /*@__PURE__*/ (() => {
    const scheduleDrainQueue = (dispatcher) => {
        if (getLength(dispatcher.nextQueue) === 1) {
            const { observer } = dispatcher;
            pipe(observer, Observer$schedule(dispatcher.continuation), Disposable$onComplete(dispatcher.onContinuationDispose));
        }
    };
    return createInstanceFactory(mix(Disposable$mixin, function ObserverDispatcher(instance, observer) {
        init(Disposable$mixin, instance);
        instance.observer = observer;
        instance.nextQueue = [];
        instance.continuation = () => {
            const { nextQueue, observer } = instance;
            while (getLength(nextQueue) > 0) {
                const next = nextQueue.shift();
                observer[SinkLike_notify](next);
                Continuation$yield_();
            }
        };
        instance.onContinuationDispose = () => {
            if (Disposable$isDisposed(instance)) {
                pipe(observer, Disposable$dispose(instance[DisposableLike_error]));
            }
        };
        pipe(instance, Disposable$onDisposed(e => {
            if (isEmpty(instance.nextQueue)) {
                pipe(observer, Disposable$dispose(e));
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
            return Observer$getScheduler(this.observer);
        },
        [DispatcherLike_dispatch](next) {
            if (!Disposable$isDisposed(this)) {
                this.nextQueue.push(next);
                scheduleDrainQueue(this);
            }
        },
    }));
})();
const Observer$mixin = 
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
                dispatcher = pipe(createObserverDispatcher(this), Disposable$addToIgnoringChildErrors(this));
                this.dispatcher = dispatcher;
            }
            return dispatcher;
        },
    }), returns);
})();

export { Observer$mixin as default };
