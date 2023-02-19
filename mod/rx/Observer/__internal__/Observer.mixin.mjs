/// <reference types="./Observer.mixin.d.ts" />
import { createInstanceFactory, mix, init, props } from '../../../__internal__/mixins.mjs';
import { getLength, pipe, isEmpty, none, unsafeCast, isNone, returns } from '../../../functions.mjs';
import { SinkLike_notify, ObserverLike_scheduler, ObserverLike_dispatcher } from '../../../rx.mjs';
import { DispatcherLike_scheduler, DispatcherLike_dispatch } from '../../../scheduling.mjs';
import { Continuation__yield } from '../../../scheduling/Continuation/__internal__/Continuation.create.mjs';
import { DisposableLike_error } from '../../../util.mjs';
import Disposable_addToIgnoringChildErrors from '../../../util/Disposable/__internal__/Disposable.addToIgnoringChildErrors.mjs';
import Disposable_dispose from '../../../util/Disposable/__internal__/Disposable.dispose.mjs';
import Disposable_isDisposed from '../../../util/Disposable/__internal__/Disposable.isDisposed.mjs';
import Disposable_mixin from '../../../util/Disposable/__internal__/Disposable.mixin.mjs';
import Disposable_onComplete from '../../../util/Disposable/__internal__/Disposable.onComplete.mjs';
import Disposable_onDisposed from '../../../util/Disposable/__internal__/Disposable.onDisposed.mjs';
import Observer_getScheduler from './Observer.getScheduler.mjs';
import Observer_schedule from './Observer.schedule.mjs';

const createObserverDispatcher = /*@__PURE__*/ (() => {
    const scheduleDrainQueue = (dispatcher) => {
        if (getLength(dispatcher[ObserverDispatcher_nextQueue]) === 1) {
            const { [ObserverDispatcher_observer]: observer } = dispatcher;
            pipe(observer, Observer_schedule(dispatcher[ObserverDispatcher_continuation]), Disposable_onComplete(dispatcher[ObserverDispatcher_onContinuationDispose]));
        }
    };
    const ObserverDispatcher_continuation = Symbol("ObserverDispatcher_continuation");
    const ObserverDispatcher_nextQueue = Symbol("ObserverDispatcher_nextQueue");
    const ObserverDispatcher_observer = Symbol("ObserverDispatcher_observer");
    const ObserverDispatcher_onContinuationDispose = Symbol("ObserverDispatcher_onContinuationDispose");
    return createInstanceFactory(mix(Disposable_mixin, function ObserverDispatcher(instance, observer) {
        init(Disposable_mixin, instance);
        instance[ObserverDispatcher_observer] = observer;
        instance[ObserverDispatcher_nextQueue] = [];
        instance[ObserverDispatcher_continuation] = () => {
            const { [ObserverDispatcher_nextQueue]: nextQueue, [ObserverDispatcher_observer]: observer, } = instance;
            while (getLength(nextQueue) > 0) {
                const next = nextQueue.shift();
                observer[SinkLike_notify](next);
                Continuation__yield();
            }
        };
        instance[ObserverDispatcher_onContinuationDispose] = () => {
            if (Disposable_isDisposed(instance)) {
                pipe(observer, Disposable_dispose(instance[DisposableLike_error]));
            }
        };
        pipe(instance, Disposable_onDisposed(e => {
            if (isEmpty(instance[ObserverDispatcher_nextQueue])) {
                pipe(observer, Disposable_dispose(e));
            }
        }));
        return instance;
    }, props({
        [ObserverDispatcher_continuation]: none,
        [ObserverDispatcher_nextQueue]: none,
        [ObserverDispatcher_observer]: none,
        [ObserverDispatcher_onContinuationDispose]: none,
    }), {
        get [DispatcherLike_scheduler]() {
            unsafeCast(this);
            return Observer_getScheduler(this[ObserverDispatcher_observer]);
        },
        [DispatcherLike_dispatch](next) {
            if (!Disposable_isDisposed(this)) {
                this[ObserverDispatcher_nextQueue].push(next);
                scheduleDrainQueue(this);
            }
        },
    }));
})();
const Observer_mixin = 
/*@__PURE__*/ (() => {
    const ObserverMixin_dispatcher = Symbol("ObserverMixin_dispatcher");
    return pipe(mix(function ObserverMixin(instance, scheduler) {
        instance[ObserverLike_scheduler] = scheduler;
        return instance;
    }, props({
        [ObserverLike_scheduler]: none,
        [ObserverMixin_dispatcher]: none,
    }), {
        get [ObserverLike_dispatcher]() {
            unsafeCast(this);
            let { [ObserverMixin_dispatcher]: dispatcher } = this;
            if (isNone(dispatcher)) {
                dispatcher = pipe(createObserverDispatcher(this), Disposable_addToIgnoringChildErrors(this));
                this[ObserverMixin_dispatcher] = dispatcher;
            }
            return dispatcher;
        },
    }), returns);
})();

export { Observer_mixin as default };
