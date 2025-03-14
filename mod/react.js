/// <reference types="./react.d.ts" />

import { createElement, useCallback, useEffect, useMemo, useRef, useState, } from "react";
import { nullObject } from "./__internal__/constants.js";
import * as Cache from "./computations/Cache.js";
import * as EventSource from "./computations/EventSource.js";
import * as Observable from "./computations/Observable.js";
import * as Subject from "./computations/Subject.js";
import { StoreLike_value, StreamableLike_stream, } from "./computations.js";
import { bindMethod, isFunction, isNone, isSome, none, pipe, pipeSomeLazy, raiseError, } from "./functions.js";
import * as ReactScheduler from "./react/Scheduler.js";
import * as DisposableContainer from "./utils/DisposableContainer.js";
import { DisposableLike_dispose, EventListenerLike_notify, PauseableLike_isPaused, PauseableLike_pause, PauseableLike_resume, SinkLike_complete, } from "./utils.js";
export const createComponent = (fn, options = {}) => {
    const ObservableComponent = (props) => {
        const propsSubject = useDisposable(() => Subject.create({ replay: 1 }), []);
        useEffect(() => {
            propsSubject?.[EventListenerLike_notify](props);
        }, [propsSubject, props]);
        return (useObserve(pipeSomeLazy(propsSubject, fn), [propsSubject], options) ??
            nullObject);
    };
    return ObservableComponent;
};
export const useSink = (sink) => {
    const stableSinkRef = useRef(none);
    useEffect(() => {
        stableSinkRef.current = sink;
    }, [sink]);
    const notify = useCallback((req) => stableSinkRef?.current?.[EventListenerLike_notify](req) ?? true, [stableSinkRef]);
    const complete = useCallback(() => stableSinkRef?.current?.[SinkLike_complete](), [stableSinkRef]);
    return useMemo(() => ({ notify, complete }), [notify, complete]);
};
export const useDisposable = (factory, deps) => {
    const [disposable, setDisposable] = useState(none);
    const [error, setError] = useState(none);
    useEffect(() => {
        const disposable = factory();
        if (isNone(disposable)) {
            return;
        }
        pipe(disposable, DisposableContainer.onError(setError));
        setDisposable(disposable);
        return bindMethod(disposable, DisposableLike_dispose);
    }, [...deps, setDisposable]);
    return isSome(error) ? raiseError(error) : disposable;
};
export const useListen = (eventSourceOrFactory, depsOrNone) => {
    const [state, updateState] = useState(none);
    const [error, updateError] = useState(none);
    const eventSource = isFunction(eventSourceOrFactory)
        ? useDisposable(eventSourceOrFactory, depsOrNone)
        : eventSourceOrFactory;
    useDisposable(pipeSomeLazy(eventSource, EventSource.addEventHandler(v => updateState(_ => v)), DisposableContainer.onError(updateError)), [eventSource, updateState, updateError]);
    return isSome(error) ? raiseError(error) : state;
};
export const useObserve = (observableOrFactory, optionsOrDeps, optionsOrNone) => {
    const [state, updateState] = useState(none);
    const [error, updateError] = useState(none);
    const observable = isFunction(observableOrFactory)
        ? useMemo(observableOrFactory, optionsOrDeps)
        : observableOrFactory;
    const { backpressureStrategy, capacity, priority } = (isFunction(observableOrFactory)
        ? optionsOrNone
        : optionsOrDeps) ?? {};
    useDisposable(pipeSomeLazy(observable, Observable.forEach((v) => updateState(_ => v)), Observable.subscribe(ReactScheduler.get(priority), {
        backpressureStrategy,
        capacity,
    }), DisposableContainer.onError(updateError)), [
        observable,
        updateState,
        updateError,
        priority,
        backpressureStrategy,
        capacity,
    ]);
    return isSome(error) ? raiseError(error) : state;
};
export const usePauseable = (pauseable) => {
    const stablePauseableRef = useRef(none);
    useEffect(() => {
        stablePauseableRef.current = pauseable;
    }, [pauseable]);
    const pause = useCallback(() => stablePauseableRef?.current?.[PauseableLike_pause](), [stablePauseableRef]);
    const resume = useCallback(() => stablePauseableRef?.current?.[PauseableLike_resume](), [stablePauseableRef]);
    const isPaused = useListen(pauseable?.[PauseableLike_isPaused]) ??
        pauseable?.[PauseableLike_isPaused][StoreLike_value] ??
        true;
    return useMemo(() => ({
        isPaused,
        pause,
        resume,
    }), [isPaused, pause, resume]);
};
export const useStore = (storeOrFactory, depsOrNone) => {
    const [state, updateState] = useState(none);
    const [error, updateError] = useState(none);
    const store = isFunction(storeOrFactory)
        ? useMemo(storeOrFactory, depsOrNone)
        : storeOrFactory;
    useEffect(() => {
        updateState(_ => store?.[StoreLike_value]);
    }, [store, updateState]);
    useDisposable(pipeSomeLazy(store, EventSource.addEventHandler(v => updateState(_ => v)), DisposableContainer.onError(updateError)), [store, updateState, updateError]);
    return isSome(error) ? raiseError(error) : state;
};
export const useStream = (streamableOrFactory, optionsOrDeps, optionsOrNone) => {
    const streamable = isFunction(streamableOrFactory)
        ? useMemo(streamableOrFactory, optionsOrDeps)
        : streamableOrFactory;
    const { backpressureStrategy, capacity, priority, replay = 1, } = (isFunction(streamableOrFactory)
        ? optionsOrNone
        : optionsOrDeps) ?? {};
    const stream = useDisposable(() => streamable[StreamableLike_stream](ReactScheduler.get(priority), {
        replay,
        backpressureStrategy,
        capacity,
    }), [streamable, priority, replay, backpressureStrategy, capacity]);
    return stream;
};
export const CacheProvider = (props) => {
    const { cacheContext, priority, backpressureStrategy, capacity, cleanupPriority, maxEntries, persistentStore, children, } = props ?? {};
    const cache = useDisposable(() => Cache.create(ReactScheduler.get(priority), {
        backpressureStrategy,
        capacity,
        cleanupScheduler: ReactScheduler.get(cleanupPriority ?? 4),
        maxEntries,
        persistentStore,
    }), [
        priority,
        backpressureStrategy,
        capacity,
        cleanupPriority,
        maxEntries,
        persistentStore,
    ]);
    return createElement(cacheContext.Provider, {
        value: cache,
    }, children);
};
