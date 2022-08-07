/// <reference types="./react.d.ts" />
import { useState, useEffect, useMemo } from 'react';
import { unstable_now, unstable_shouldYield, unstable_requestPaint, unstable_scheduleCallback, unstable_cancelCallback, unstable_IdlePriority, unstable_ImmediatePriority, unstable_NormalPriority, unstable_LowPriority, unstable_UserBlockingPriority } from 'scheduler';
import { getDelay } from '../__internal__/optionalArgs.mjs';
import { disposableMixin } from '../__internal__/util/DisposableLikeMixins.mjs';
import { createInstanceFactory, clazz, __extends, init } from '../__internal__/util/Object.mjs';
import { none, isSome, pipe, pipeLazy, ignore } from '../functions.mjs';
import { createSubject } from '../rx.mjs';
import { forEach, subscribe, distinctUntilChanged } from '../rx/ObservableLike.mjs';
import { publish } from '../rx/SubjectLike.mjs';
import { SchedulerLike_inContinuation, SchedulerLike_now, SchedulerLike_shouldYield, SchedulerLike_requestYield, SchedulerLike_schedule } from '../scheduling.mjs';
import { toScheduler } from '../scheduling/PrioritySchedulerLike.mjs';
import { isInContinuation } from '../scheduling/SchedulerLike.mjs';
import { createDisposable } from '../util.mjs';
import { run } from '../util/ContinuationLike.mjs';
import { onError, dispose, addIgnoringChildErrors, isDisposed, onDisposed, addTo } from '../util/DisposableLike.mjs';

/**
 * Returns the current value, if defined, of `observable`.
 *
 * @param observable The `ObservableLike` to subscribe to.
 * @param scheduler An optional scheduler used when subscribing to `observable`. The default
 * is React's normal priority scheduler.
 */
const useObservable = (observable, options = {}) => {
    const [state, updateState] = useState(none);
    const [error, updateError] = useState(none);
    useEffect(() => {
        const { scheduler: schedulerOption } = options;
        const scheduler = isSome(schedulerOption) && schedulerOption instanceof Function
            ? schedulerOption()
            : schedulerOption !== null && schedulerOption !== void 0 ? schedulerOption : createReactNormalPriorityScheduler();
        const subscription = pipe(observable, forEach(v => updateState(_ => v)), subscribe(scheduler), onError(updateError));
        return pipeLazy(
        // If a scheduler is allocated, then dispose the new scheduler
        // which will also dispose all subscriptions. Otherwise
        // only dispose the subscription.
        scheduler === schedulerOption ? subscription : scheduler, dispose(), ignore);
    }, [observable, updateState, updateError, options.scheduler]);
    if (isSome(error)) {
        const { cause } = error;
        throw cause;
    }
    return state;
};
const createReplaySubject = () => createSubject({ replay: 1 });
const createComponent = (fn, options = {}) => {
    const ObservableComponent = (props) => {
        var _a;
        const propsSubject = useMemo(createReplaySubject, [
            createReplaySubject,
        ]);
        pipe(propsSubject, publish(props));
        const elementObservable = useMemo(() => pipe(propsSubject, distinctUntilChanged(), fn), [propsSubject]);
        return (_a = useObservable(elementObservable, options)) !== null && _a !== void 0 ? _a : null;
    };
    return ObservableComponent;
};
const createReactPriorityScheduler = /*@__PURE__*/ createInstanceFactory(clazz(__extends(disposableMixin), function ReactPriorityScheduler() {
    init(disposableMixin, this);
    return this;
}, {
    [SchedulerLike_inContinuation]: false,
}, {
    get [SchedulerLike_now]() {
        return unstable_now();
    },
    get [SchedulerLike_shouldYield]() {
        const self = this;
        return isInContinuation(self) && unstable_shouldYield();
    },
    [SchedulerLike_requestYield]() {
        unstable_requestPaint();
    },
    [SchedulerLike_schedule](continuation, options) {
        const delay = getDelay(options);
        const { priority } = options;
        pipe(this, addIgnoringChildErrors(continuation));
        if (isDisposed(continuation)) {
            return;
        }
        const callback = () => {
            pipe(callbackNodeDisposable, dispose());
            this[SchedulerLike_inContinuation] = true;
            run(continuation);
            this[SchedulerLike_inContinuation] = false;
        };
        const callbackNode = unstable_scheduleCallback(priority, callback, delay > 0 ? { delay } : none);
        const callbackNodeDisposable = pipe(createDisposable(), onDisposed(pipeLazy(callbackNode, unstable_cancelCallback)), addTo(continuation));
    },
}));
const createReactSchedulerFactory = (priority) => () => pipe(createReactPriorityScheduler(), toScheduler(priority));
const createReactIdlePriorityScheduler = 
/*@__PURE__*/ createReactSchedulerFactory(unstable_IdlePriority);
const createReactImmediatePriorityScheduler = 
/*@__PURE__*/ createReactSchedulerFactory(unstable_ImmediatePriority);
const createReactNormalPriorityScheduler = 
/*@__PURE__*/ createReactSchedulerFactory(unstable_NormalPriority);
const createReactLowPriorityScheduler = 
/*@__PURE__*/ createReactSchedulerFactory(unstable_LowPriority);
const createReactUserBlockingPriorityScheduler = 
/*@__PURE__*/ createReactSchedulerFactory(unstable_UserBlockingPriority);

export { createComponent, createReactIdlePriorityScheduler, createReactImmediatePriorityScheduler, createReactLowPriorityScheduler, createReactNormalPriorityScheduler, createReactUserBlockingPriorityScheduler, useObservable };
