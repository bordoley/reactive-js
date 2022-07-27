/// <reference types="./Observer.d.ts" />
import { getLength, pipe, none, isNone, isEmpty } from '../../functions.mjs';
import { DispatcherLike_scheduler, DispatcherLike_dispatch, ObserverLike_scheduler, ObserverLike_dispatcher } from '../../scheduling.mjs';
import { getScheduler } from '../../scheduling/ObserverLike.mjs';
import { schedule, __yield } from '../../scheduling/SchedulerLike.mjs';
import { SinkLike_notify, DisposableLike_error } from '../../util.mjs';
import { addTo, onComplete, addToIgnoringChildErrors, onDisposed } from '../../util/DisposableLike.mjs';
import { prototype } from '../util/Disposable.mjs';
import { Object_properties, anyProperty, Object_init, init, mixWith, createObjectFactory } from '../util/Object.mjs';
import { isDisposed, dispose } from '../util/DisposableLikeInternal.mjs';

const createObserverDispatcher = (() => {
    const scheduleDrainQueue = (dispatcher) => {
        if (getLength(dispatcher.nextQueue) === 1) {
            const { observer } = dispatcher;
            pipe(getScheduler(observer), schedule(dispatcher.continuation), addTo(observer), onComplete(dispatcher.onContinuationDispose));
        }
    };
    return pipe({
        [Object_properties]: {
            continuation: anyProperty,
            nextQueue: anyProperty,
            observer: anyProperty,
            onContinuationDispose: anyProperty,
        },
        [Object_init](observer) {
            init(prototype, this);
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
    }, mixWith(prototype), createObjectFactory());
})();
const observerPrototype = {
    [Object_properties]: {
        [ObserverLike_scheduler]: anyProperty,
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
};

export { observerPrototype };
