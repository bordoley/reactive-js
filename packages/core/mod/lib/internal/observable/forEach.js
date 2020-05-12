import { dispose, addDisposableOrTeardown } from "../../disposable.js";
import { pipe } from "../../functions.js";
import { none } from "../../option.js";
import { createVirtualTimeScheduler, } from "../../scheduler.js";
import { onNotify } from "./onNotify.js";
import { subscribe } from "./subscribe.js";
export const forEach = (callback, schedulerFactory = createVirtualTimeScheduler) => observable => {
    const scheduler = schedulerFactory();
    let error = none;
    const subscription = pipe(observable, onNotify(callback), subscribe(scheduler), addDisposableOrTeardown(e => {
        error = e;
    }));
    scheduler.run();
    dispose(subscription);
    dispose(scheduler);
    const reifiedError = error;
    if (reifiedError !== none) {
        const { cause } = reifiedError;
        throw cause;
    }
};
