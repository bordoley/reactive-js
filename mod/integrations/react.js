/// <reference types="./react.d.ts" />

import { useEffect, useMemo, useState, } from "react";
import { ignore, isFunction, isSome, none, pipe, pipeLazy, raiseError, } from "../functions.js";
import * as Observable from "../rx/Observable.js";
import * as Subject from "../rx/Subject.js";
import * as Disposable from "../util/Disposable.js";
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
        const subscription = pipe(observable, Observable.forEach(v => updateState(_ => v)), Observable.subscribe(scheduler), Disposable.onError(updateError));
        return pipeLazy(
        // If a scheduler is allocated, then dispose the new scheduler
        // which will also dispose all subscriptions. Otherwise
        // only dispose the subscription.
        scheduler === schedulerOption ? subscription : scheduler, Disposable.dispose(), ignore);
    }, [observable, updateState, updateError, options.scheduler]);
    return isSome(error) ? raiseError(error) : state;
};
const createReplaySubject = () => Subject.create({ replay: 1 });
export const createComponent = (fn, options = {}) => {
    const ObservableComponent = (props) => {
        var _a;
        const propsSubject = useMemo(createReplaySubject, [
            createReplaySubject,
        ]);
        pipe(propsSubject, Subject.publish(props));
        const elementObservable = useMemo(() => pipe(propsSubject, Observable.distinctUntilChanged(), fn), [propsSubject]);
        return (_a = useObservable(elementObservable, options)) !== null && _a !== void 0 ? _a : null;
    };
    return ObservableComponent;
};
