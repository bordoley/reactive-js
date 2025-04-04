/// <reference types="./react.d.ts" />

import { useEffect, useMemo, useState } from "react";
import { EventSourceLike_subscribe, StoreLike_value, StreamableLike_stream, } from "./computations.js";
import { isFunction, isNone, isSome, none, pipe, raiseError, } from "./functions.js";
import * as ReactScheduler from "./react/Scheduler.js";
import * as DisposableContainer from "./utils/DisposableContainer.js";
import * as Observer from "./utils/__internal__/Observer.js";
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
    const [error, updateError] = useState(none);
    const source = isFunction(sourceOrFactory)
        ? useMemo(sourceOrFactory, optionsOrDeps)
        : sourceOrFactory;
    const { priority } = (isFunction(sourceOrFactory)
        ? optionsOrNone
        : optionsOrDeps) ?? {};
    useDisposable(() => {
        const scheduler = ReactScheduler.get(priority);
        const onNext = (v) => updateState(_ => v);
        const observer = pipe(Observer.create(onNext, scheduler), DisposableContainer.onError(updateError));
        source?.[EventSourceLike_subscribe](observer);
        return observer;
    }, [source, updateState, updateError, priority]);
    // Special case for StoreLikes to return the current value always if defined.
    const storeCurrentValue = source?.[StoreLike_value];
    return isSome(error) ? raiseError(error) : (state ?? storeCurrentValue);
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
