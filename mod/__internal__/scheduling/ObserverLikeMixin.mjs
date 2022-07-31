/// <reference types="./ObserverLikeMixin.d.ts" />
import { getLength, pipe, isEmpty, none, isNone, returns } from '../../functions.mjs';
import { DispatcherLike_scheduler, DispatcherLike_dispatch, ObserverLike_scheduler, ObserverLike_dispatcher } from '../../scheduling.mjs';
import { getScheduler } from '../../scheduling/ObserverLike.mjs';
import { schedule, __yield } from '../../scheduling/SchedulerLike.mjs';
import { SinkLike_notify, DisposableLike_exception } from '../../util.mjs';
import '../../util/DisposableLike.mjs';
import { disposableMixin } from '../util/DisposableLikeMixins.mjs';
import { clazz, init, mixWith, createObjectFactory } from '../util/Object.mjs';
import { addTo, onComplete, isDisposed, dispose, onDisposed, addToIgnoringChildErrors } from '../util/DisposableLikeInternal.mjs';

const createObserverDispatcher = (() => {
    const scheduleDrainQueue = (dispatcher) => {
        if (getLength(dispatcher.nextQueue) === 1) {
            const { observer } = dispatcher;
            pipe(getScheduler(observer), schedule(dispatcher.continuation), addTo(observer), onComplete(dispatcher.onContinuationDispose));
        }
    };
    return pipe(clazz(function ObserverDispatcher(observer) {
        init(disposableMixin, this);
        this.observer = observer;
        this.nextQueue = [];
        this.continuation = () => {
            const { nextQueue } = this;
            const { observer } = this;
            while (getLength(nextQueue) > 0) {
                const next = nextQueue.shift();
                observer[SinkLike_notify](next);
                __yield();
            }
        };
        this.onContinuationDispose = () => {
            if (isDisposed(this)) {
                pipe(this.observer, dispose(this[DisposableLike_exception]));
            }
        };
        pipe(this, onDisposed(e => {
            if (isEmpty(this.nextQueue)) {
                pipe(this, dispose(e));
            }
        }));
    }, {
        continuation: none,
        nextQueue: none,
        observer: none,
        onContinuationDispose: none,
    }, {
        get [DispatcherLike_scheduler]() {
            const self = this;
            return getScheduler(self.observer);
        },
        [DispatcherLike_dispatch](next) {
            if (!isDisposed(this)) {
                this.nextQueue.push(next);
                scheduleDrainQueue(this);
            }
        },
    }), mixWith(disposableMixin), createObjectFactory());
})();
const observerMixin = /*@__PURE__*/ (() => pipe(clazz(function ObserverMixin(scheduler) {
    this[ObserverLike_scheduler] = scheduler;
}, {
    [ObserverLike_scheduler]: none,
    dispatcher: none,
}, {
    get [ObserverLike_dispatcher]() {
        const self = this;
        if (isNone(self.dispatcher)) {
            const dispatcher = pipe(createObserverDispatcher(self), addToIgnoringChildErrors(self));
            self.dispatcher = dispatcher;
        }
        return self.dispatcher;
    },
}), returns))();

export { observerMixin };
