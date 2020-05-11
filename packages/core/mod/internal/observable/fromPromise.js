import { createObservable } from "./createObservable.js";
import { toErrorHandler } from "../../disposable.js";
export const fromPromise = (factory) => {
    const onSubscribe = (dispatcher) => {
        factory().then(next => {
            if (!dispatcher.isDisposed) {
                dispatcher.dispatch(next);
                dispatcher.dispose();
            }
        }, toErrorHandler(dispatcher));
    };
    return createObservable(onSubscribe);
};
