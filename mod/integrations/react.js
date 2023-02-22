/// <reference types="./react.d.ts" />

import { useEffect, useMemo, useState, } from "react";
import { ignore, isFunction, isSome, none, pipe, pipeLazy, raiseError, } from "../functions.js";
import { distinctUntilChanged, forEach, subscribe } from "../rx/Observable.js";
import { create as createSubject, publish } from "../rx/Subject.js";
import { dispose, onError } from "../util/Disposable.js";
import { createSchedulerWithNormalPriority } from "./scheduler.js";
/**
 * Returns the current value, if defined, of `observable`.
 *
 * @param observable The `ObservableLike` to subscribe to.
 * @param scheduler An optional scheduler used when subscribing to `observable`. The default
 * is React's normal priority scheduler.
 */
export const useObservable = (observable, options = {}) => {
    const [state, updateState] = useState(none);
    const [error, updateError] = useState(none);
    useEffect(() => {
        const { scheduler: schedulerOption } = options;
        const scheduler = isFunction(schedulerOption)
            ? schedulerOption()
            : schedulerOption !== null && schedulerOption !== void 0 ? schedulerOption : createSchedulerWithNormalPriority();
        const subscription = pipe(observable, forEach(v => updateState(_ => v)), subscribe(scheduler), onError(updateError));
        return pipeLazy(
        // If a scheduler is allocated, then dispose the new scheduler
        // which will also dispose all subscriptions. Otherwise
        // only dispose the subscription.
        scheduler === schedulerOption ? subscription : scheduler, dispose(), ignore);
    }, [observable, updateState, updateError, options.scheduler]);
    return isSome(error) ? raiseError(error) : state;
};
const createReplaySubject = () => createSubject({ replay: 1 });
export const createComponent = (fn, options = {}) => {
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
