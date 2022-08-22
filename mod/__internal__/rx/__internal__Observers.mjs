/// <reference types="./__internal__Observers.d.ts" />
import { getLength, pipe, isEmpty, none, unsafeCast, isNone, returns } from '../../functions.mjs';
import { SinkLike_notify, ObserverLike_scheduler, ObserverLike_dispatcher } from '../../rx.mjs';
import { getScheduler } from '../../rx/ObserverLike.mjs';
import { DispatcherLike_scheduler, DispatcherLike_dispatch } from '../../scheduling.mjs';
import { schedule, __yield } from '../../scheduling/SchedulerLike.mjs';
import { DisposableLike_exception } from '../../util.mjs';
import { addTo, onComplete, isDisposed, dispose, onDisposed, addToIgnoringChildErrors } from '../../util/DisposableLike.mjs';
import { disposableMixin } from '../util/__internal__Disposables.mjs';
import { createInstanceFactory, mixin, init, props, include } from '../util/__internal__Objects.mjs';

const createObserverDispatcher = (() => {
    const scheduleDrainQueue = (dispatcher) => {
        if (getLength(dispatcher.nextQueue) === 1) {
            const { observer } = dispatcher;
            pipe(getScheduler(observer), schedule(dispatcher.continuation), addTo(observer), onComplete(dispatcher.onContinuationDispose));
        }
    };
    return createInstanceFactory(mixin(disposableMixin, function ObserverDispatcher(instance, observer) {
        init(disposableMixin, instance);
        instance.observer = observer;
        instance.nextQueue = [];
        instance.continuation = () => {
            const { nextQueue, observer } = instance;
            while (getLength(nextQueue) > 0) {
                const next = nextQueue.shift();
                observer[SinkLike_notify](next);
                __yield();
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
            return getScheduler(this.observer);
        },
        [DispatcherLike_dispatch](next) {
            if (!isDisposed(this)) {
                this.nextQueue.push(next);
                scheduleDrainQueue(this);
            }
        },
    }));
})();
const observerMixin = /*@__PURE__*/ (() => {
    return pipe(mixin(function ObserverMixin(instance, scheduler) {
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
const createDelegatingObserver = /*@__PURE__*/ (() => {
    const typedObserverMixin = observerMixin();
    return createInstanceFactory(mixin(include(disposableMixin, typedObserverMixin), function DelegatingObserver(instance, observer) {
        init(disposableMixin, instance);
        init(typedObserverMixin, instance, getScheduler(observer));
        instance.delegate = observer;
        return instance;
    }, props({
        delegate: none,
    }), {
        [SinkLike_notify](next) {
            this.delegate[SinkLike_notify](next);
        },
    }));
})();
const createObserver = 
/*@__PURE__*/ (() => {
    const typedObserverMixin = observerMixin();
    return createInstanceFactory(mixin(include(disposableMixin, typedObserverMixin), function Observer(instance, scheduler) {
        init(disposableMixin, instance);
        init(typedObserverMixin, instance, scheduler);
        return instance;
    }, {}, {
        [SinkLike_notify](_) { },
    }));
})();

export { createDelegatingObserver, createObserver, observerMixin };
