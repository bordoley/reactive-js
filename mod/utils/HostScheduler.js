/// <reference types="./HostScheduler.d.ts" />

import { MAX_VALUE, globalObject } from "../__internal__/constants.js";
import { include, init, mixInstanceFactory, props, unsafeCast, } from "../__internal__/mixins.js";
import { isNone, isSome, newInstance, none, pipe, pipeLazy, } from "../functions.js";
import { clampPositiveInteger } from "../math.js";
import SchedulerMixin, { SchedulerContinuation, SchedulerContinuationLike_dueTime, SchedulerContinuationLike_run, SchedulerMixinHostLike_schedule, SchedulerMixinHostLike_shouldYield, } from "../utils/__mixins__/SchedulerMixin.js";
import { ClockLike_now, CollectionEnumeratorLike_peek, DisposableLike_dispose, DisposableLike_isDisposed, EnumeratorLike_current, EnumeratorLike_moveNext, QueueableLike_enqueue, SchedulerLike_inContinuation, SchedulerLike_maxYieldInterval, } from "../utils.js";
import * as Disposable from "./Disposable.js";
import * as DisposableContainer from "./DisposableContainer.js";
import QueueMixin from "./__mixins__/QueueMixin.js";
export const create = /*@PURE__*/ (() => {
    const HostScheduler_hostSchedulerContinuationDueTime = Symbol("HostScheduler_hostSchedulerContinuationDueTime");
    const HostScheduler_activeContinuation = Symbol("HostScheduler_activeContinuation");
    const HostScheduler_messageChannel = Symbol("MessageChannelScheduler_messageChannel");
    const HostScheduler_nativeSchedulerSubscription = Symbol("HostScheduler_nativeSchedulerSubscription");
    const peek = (instance) => {
        let continuation = none;
        while (true) {
            continuation = instance[CollectionEnumeratorLike_peek];
            if (isNone(continuation) || !continuation[DisposableLike_isDisposed]) {
                break;
            }
            instance[EnumeratorLike_moveNext]();
        }
        return continuation;
    };
    const hostSchedulerContinuation = (instance, immmediateOrTimerDisposable) => {
        immmediateOrTimerDisposable[DisposableLike_dispose]();
        const startTime = instance[ClockLike_now];
        while (!instance[DisposableLike_isDisposed]) {
            const nextContinuationToRun = peek(instance);
            if (isNone(nextContinuationToRun)) {
                break;
            }
            const dueTime = nextContinuationToRun[SchedulerContinuationLike_dueTime];
            const now = instance[ClockLike_now];
            const delay = dueTime - now;
            if (delay > 0) {
                scheduleOnHost(instance);
                break;
            }
            instance[EnumeratorLike_moveNext]();
            const continuation = instance[EnumeratorLike_current];
            instance[HostScheduler_activeContinuation] = continuation;
            continuation?.[SchedulerContinuationLike_run]();
            instance[HostScheduler_activeContinuation] = none;
            const elapsed = instance[ClockLike_now] - startTime;
            const shouldYield = elapsed > instance[SchedulerLike_maxYieldInterval];
            if (shouldYield) {
                scheduleOnHost(instance);
                break;
            }
        }
    };
    const scheduleOnHost = (instance) => {
        const now = instance[ClockLike_now];
        const hostSchedulerContinuationIsScheduled = !instance[HostScheduler_nativeSchedulerSubscription][DisposableLike_isDisposed];
        const hostSchedulerContinuationDueTime = instance[HostScheduler_hostSchedulerContinuationDueTime];
        const nextContinuation = peek(instance);
        const nextContinuationDueTime = nextContinuation?.[SchedulerContinuationLike_dueTime] ?? MAX_VALUE;
        const inContinuation = instance[SchedulerLike_inContinuation];
        const hostContinuationAlreadyScheduled = hostSchedulerContinuationIsScheduled &&
            hostSchedulerContinuationDueTime <= nextContinuationDueTime;
        if (isNone(nextContinuation) ||
            inContinuation ||
            hostContinuationAlreadyScheduled) {
            return;
        }
        const dueTime = nextContinuation[SchedulerContinuationLike_dueTime];
        const delay = clampPositiveInteger(dueTime - now);
        instance[HostScheduler_hostSchedulerContinuationDueTime] = dueTime;
        const { setImmediate, setTimeout, clearImmediate, clearTimeout } = globalObject;
        const hostMessageChannel = instance[HostScheduler_messageChannel];
        if (delay <= 4 && isSome(hostMessageChannel)) {
            hostMessageChannel.port2.postMessage(null);
        }
        else {
            const disposable = Disposable.create();
            const cleanup = delay > 4 || isNone(setImmediate)
                ? pipeLazy(setTimeout(hostSchedulerContinuation, delay, instance, disposable), clearTimeout)
                : pipeLazy(setImmediate(hostSchedulerContinuation, instance, disposable), clearImmediate);
            instance[HostScheduler_nativeSchedulerSubscription] = pipe(disposable, Disposable.addTo(instance), DisposableContainer.onDisposed(cleanup));
        }
    };
    function onHostSchedulerDisposed() {
        const channel = this[HostScheduler_messageChannel];
        if (isSome(channel)) {
            channel.port1.close();
            channel.port2.close();
        }
    }
    const createHostSchedulerInstance = mixInstanceFactory(include(SchedulerMixin, QueueMixin()), function HostScheduler(maxYieldInterval) {
        this[SchedulerLike_maxYieldInterval] = maxYieldInterval;
        init(SchedulerMixin, this);
        init(QueueMixin(), this, {
            comparator: SchedulerContinuation.compare,
        });
        const MessageChannel = globalObject.MessageChannel;
        const setImmediate = globalObject.setImmediate;
        if (isSome(MessageChannel) && isNone(setImmediate)) {
            const channel = newInstance(MessageChannel);
            this[HostScheduler_messageChannel] = channel;
            channel.port1.onmessage = () => hostSchedulerContinuation(this, Disposable.disposed);
            pipe(this, DisposableContainer.onDisposed(onHostSchedulerDisposed));
        }
        return this;
    }, props({
        [SchedulerLike_maxYieldInterval]: 5,
        [HostScheduler_hostSchedulerContinuationDueTime]: 0,
        [HostScheduler_activeContinuation]: none,
        [HostScheduler_messageChannel]: none,
        [HostScheduler_nativeSchedulerSubscription]: Disposable.disposed,
    }), {
        get [SchedulerMixinHostLike_shouldYield]() {
            unsafeCast(this);
            const now = this[ClockLike_now];
            const nextContinuation = peek(this);
            const yieldToNextContinuation = isSome(nextContinuation) &&
                this[HostScheduler_activeContinuation] !== nextContinuation &&
                nextContinuation[SchedulerContinuationLike_dueTime] <= now;
            return yieldToNextContinuation;
        },
        [SchedulerMixinHostLike_schedule](continuation) {
            this[QueueableLike_enqueue](continuation);
            scheduleOnHost(this);
        },
    });
    return (options = {}) => {
        const { maxYieldInterval = 300 } = options;
        return createHostSchedulerInstance(clampPositiveInteger(maxYieldInterval));
    };
})();
