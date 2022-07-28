/// <reference types="./ObserverLikeMixin.d.ts" />
import { getLength, pipe, none, isNone, isEmpty, returns } from '../../functions.mjs';
import { DispatcherLike_scheduler, DispatcherLike_dispatch, ObserverLike_scheduler, ObserverLike_dispatcher } from '../../scheduling.mjs';
import { getScheduler } from '../../scheduling/ObserverLike.mjs';
import { schedule, __yield } from '../../scheduling/SchedulerLike.mjs';
import { SinkLike_notify, DisposableLike_error } from '../../util.mjs';
import '../../util/DisposableLike.mjs';
import { disposableMixin } from '../util/DisposableLikeMixins.mjs';
import { Object_properties, Object_init, init, mixWith, createObjectFactory } from '../util/Object.mjs';
import { addTo, onComplete, isDisposed, dispose, addToIgnoringChildErrors, onDisposed } from '../util/DisposableLikeInternal.mjs';

const createObserverDispatcher = (() => {
    const scheduleDrainQueue = (dispatcher) => {
        if (getLength(dispatcher.nextQueue) === 1) {
            const { observer } = dispatcher;
            pipe(getScheduler(observer), schedule(dispatcher.continuation), addTo(observer), onComplete(dispatcher.onContinuationDispose));
        }
    };
    return pipe({
        [Object_properties]: {
            continuation: none,
            nextQueue: none,
            observer: none,
            onContinuationDispose: none,
        },
        [Object_init](observer) {
            init(disposableMixin, this);
            this.observer = observer;
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
                    pipe(this.observer, dispose(this[DisposableLike_error]));
                }
            };
        },
        get [DispatcherLike_scheduler]() {
            return getScheduler(this.observer);
        },
        [DispatcherLike_dispatch](next) {
            if (!isDisposed(this)) {
                this.nextQueue.push(next);
                scheduleDrainQueue(this);
            }
        },
    }, mixWith(disposableMixin), createObjectFactory());
})();
const observerMixin = /*@__PURE__*/ (() => {
    return pipe({
        [Object_properties]: {
            [ObserverLike_scheduler]: none,
            dispatcher: none,
        },
        [Object_init](scheduler) {
            this[ObserverLike_scheduler] = scheduler;
        },
        get [ObserverLike_dispatcher]() {
            const self = this;
            if (isNone(self.dispatcher)) {
                const dispatcher = pipe(createObserverDispatcher(self), addToIgnoringChildErrors(self), onDisposed(e => {
                    if (isEmpty(dispatcher.nextQueue)) {
                        pipe(self, dispose(e));
                    }
                }));
                self.dispatcher = dispatcher;
            }
            return self.dispatcher;
        },
    }, returns);
})();

export { observerMixin };
