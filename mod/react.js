/// <reference types="./react.d.ts" />

import { useEffect, useMemo, useState } from "react";
import * as EventSource from "./computations/EventSource.js";
import { StoreLike_value, StreamableLike_stream, } from "./computations.js";
import { isFunction, isNone, isSome, none, pipe, pipeSome, raiseError, } from "./functions.js";
import * as ReactScheduler from "./react/Scheduler.js";
import * as DisposableContainer from "./utils/DisposableContainer.js";
import { DisposableLike_dispose, } from "./utils.js";
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
        return () => {
            disposable[DisposableLike_dispose]();
        };
    }, [...deps, setDisposable]);
    return isSome(error) ? raiseError(error) : disposable;
};
export const useEventSource = (sourceOrFactory, optionsOrDeps, optionsOrNone) => {
    const [state, updateState] = useState(none);
    const source = isFunction(sourceOrFactory)
        ? useMemo(sourceOrFactory, optionsOrDeps)
        : sourceOrFactory;
    const { priority } = (isFunction(sourceOrFactory)
        ? optionsOrNone
        : optionsOrDeps) ?? {};
    useDisposable(() => {
        const scheduler = ReactScheduler.get(priority);
        const onNext = (v) => updateState(_ => v);
        return pipeSome(source, EventSource.subscribe(onNext, { scheduler }));
    }, [source, updateState, priority]);
    // Special case for StoreLikes to return the current value always if defined.
    const storeCurrentValue = source?.[StoreLike_value];
    return state ?? storeCurrentValue;
};
export const useStreamable = (streamableOrFactory, optionsOrDeps, optionsOrNone) => {
    const streamable = isFunction(streamableOrFactory)
        ? useMemo(streamableOrFactory, optionsOrDeps)
        : streamableOrFactory;
    const { scheduler, backpressureStrategy, capacity, priority } = (isFunction(streamableOrFactory)
        ? optionsOrNone
        : optionsOrDeps) ?? {};
    const stream = useDisposable(() => {
        const streamScheduler = scheduler ?? ReactScheduler.get(priority);
        return streamable[StreamableLike_stream](streamScheduler, {
            backpressureStrategy,
            capacity,
        });
    }, [streamable, scheduler, priority, backpressureStrategy, capacity]);
    return stream;
};
