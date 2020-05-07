import { createObservable } from "./createObservable.js";
export const fromPromise = (factory) => {
    const onSubscribe = (dispatcher) => {
        factory().then(next => {
            if (!dispatcher.isDisposed) {
                dispatcher.dispatch(next);
                dispatcher.dispose();
            }
        }, cause => {
            dispatcher.dispose({ cause });
        });
    };
    return createObservable(onSubscribe);
};
