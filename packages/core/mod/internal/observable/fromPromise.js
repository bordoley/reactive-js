import { createObservable } from "./createObservable.js";
import { toErrorHandler, dispose } from "../../disposable.js";
export const fromPromise = (factory) => {
    const onSubscribe = (dispatcher) => {
        factory().then(next => {
            if (!dispatcher.isDisposed) {
                dispatcher.dispatch(next);
                dispose(dispatcher);
            }
        }, toErrorHandler(dispatcher));
    };
    return createObservable(onSubscribe);
};
