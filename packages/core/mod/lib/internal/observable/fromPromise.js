import { toErrorHandler, dispose } from "../../disposable.js";
import { createObservable } from "./createObservable.js";
import { dispatch } from "./dispatcher.js";
export const fromPromise = (factory) => {
    const onSubscribe = (dispatcher) => {
        factory().then(next => {
            if (!dispatcher.isDisposed) {
                dispatch(dispatcher, next);
                dispose(dispatcher);
            }
        }, toErrorHandler(dispatcher));
    };
    return createObservable(onSubscribe);
};
