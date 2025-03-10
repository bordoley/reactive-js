/// <reference types="./ObserverMixin.d.ts" />

import { getPrototype, include, init, mix, props, unsafeCast, } from "../../__internal__/mixins.js";
import * as WritableStore from "../../computations/WritableStore.js";
import { StoreLike_value } from "../../computations.js";
import { call, none, pipe, returns } from "../../functions.js";
import { ContinuationContextLike_yield, DispatcherLike_complete, DispatcherLike_state, DispatcherState_capacityExceeded, DispatcherState_completed, DispatcherState_ready, DisposableLike_dispose, DisposableLike_isDisposed, ObserverLike_notify, QueueLike_count, QueueLike_dequeue, QueueableLike_backpressureStrategy, QueueableLike_capacity, QueueableLike_enqueue, SchedulerLike_inContinuation, SchedulerLike_maxYieldInterval, SchedulerLike_now, SchedulerLike_requestYield, SchedulerLike_schedule, SchedulerLike_shouldYield, SerialDisposableLike_current, } from "../../utils.js";
import * as Disposable from "../Disposable.js";
import Observer_assertObserverState from "../Observer/__internal__/Observer.assertObserverState.js";
import QueueMixin from "./QueueMixin.js";
import SerialDisposableMixin from "./SerialDisposableMixin.js";
const ObserverMixin = /*@__PURE__*/ (() => {
    const ObserverMixin_scheduler = Symbol("ObserverMixin_scheduler");
    const scheduleDrainQueue = (observer) => {
        if (observer[SerialDisposableLike_current][DisposableLike_isDisposed]) {
            const continuation = (ctx) => {
                while (observer[QueueLike_count] > 0) {
                    const next = observer[QueueLike_dequeue]();
                    observer[ObserverLike_notify](next);
                    if (observer[QueueLike_count] > 0) {
                        ctx[ContinuationContextLike_yield]();
                    }
                }
                if (observer[DispatcherLike_state][StoreLike_value] ===
                    DispatcherState_completed) {
                    observer[DisposableLike_dispose]();
                }
                else {
                    observer[DispatcherLike_state][StoreLike_value] =
                        DispatcherState_ready;
                }
            };
            observer[SerialDisposableLike_current] =
                observer[SchedulerLike_schedule](continuation);
        }
    };
    const queueProtoype = getPrototype(QueueMixin());
    return returns(mix(include(QueueMixin(), SerialDisposableMixin()), function ObserverMixin(scheduler, config) {
        init(QueueMixin(), this, {
            backpressureStrategy: config[QueueableLike_backpressureStrategy],
            capacity: config[QueueableLike_capacity],
        });
        init(SerialDisposableMixin(), this, Disposable.disposed);
        this[ObserverMixin_scheduler] =
            scheduler[ObserverMixin_scheduler] ??
                scheduler;
        this[DispatcherLike_state] = pipe(WritableStore.create(DispatcherState_ready), Disposable.addTo(this));
        return this;
    }, props({
        [DispatcherLike_state]: none,
        [ObserverMixin_scheduler]: none,
    }), {
        get [SchedulerLike_inContinuation]() {
            unsafeCast(this);
            return this[ObserverMixin_scheduler][SchedulerLike_inContinuation];
        },
        get [SchedulerLike_maxYieldInterval]() {
            unsafeCast(this);
            return this[ObserverMixin_scheduler][SchedulerLike_maxYieldInterval];
        },
        get [SchedulerLike_now]() {
            unsafeCast(this);
            return this[ObserverMixin_scheduler][SchedulerLike_now];
        },
        get [SchedulerLike_shouldYield]() {
            unsafeCast(this);
            return this[ObserverMixin_scheduler][SchedulerLike_shouldYield];
        },
        [SchedulerLike_requestYield]() {
            this[ObserverMixin_scheduler][SchedulerLike_requestYield]();
        },
        [SchedulerLike_schedule](continuation, options) {
            return pipe(this[ObserverMixin_scheduler][SchedulerLike_schedule](continuation, options), Disposable.addToContainer(this));
        },
        [QueueableLike_enqueue](next) {
            let result = true;
            if (!(this[DispatcherLike_state][StoreLike_value] ===
                DispatcherState_completed) &&
                !this[DisposableLike_isDisposed]) {
                result = call(queueProtoype[QueueableLike_enqueue], this, next);
                if (!result) {
                    this[DispatcherLike_state][StoreLike_value] =
                        DispatcherState_capacityExceeded;
                }
                scheduleDrainQueue(this);
            }
            return result;
        },
        [DispatcherLike_complete]() {
            const isCompleted = this[DispatcherLike_state][StoreLike_value] ===
                DispatcherState_completed;
            this[DispatcherLike_state][StoreLike_value] =
                DispatcherState_completed;
            if (this[SerialDisposableLike_current][DisposableLike_isDisposed] &&
                !isCompleted) {
                this[DisposableLike_dispose]();
            }
        },
        [ObserverLike_notify]: Observer_assertObserverState(function (_) { }),
    }));
})();
export default ObserverMixin;
