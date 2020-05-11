import { dispose } from "../../disposable.js";
import { pipe } from "../../functions.js";
import { none } from "../../option.js";
import { createVirtualTimeScheduler, } from "../../scheduler.js";
import { onNotify } from "./onNotify.js";
import { subscribe } from "./subscribe.js";
export const toValue = (schedulerFactory = createVirtualTimeScheduler) => (source) => {
    const scheduler = schedulerFactory();
    let error = none;
    let result = none;
    let hasResult = false;
    const subscription = pipe(source, onNotify((next) => {
        result = next;
        hasResult = true;
    }), subscribe(scheduler)).add(e => {
        error = e;
    });
    scheduler.run();
    dispose(subscription);
    dispose(scheduler);
    const reifiedError = error;
    if (reifiedError !== none) {
        const { cause } = reifiedError;
        throw cause;
    }
    if (!hasResult) {
        throw new Error("Observable did not produce any values");
    }
    return result;
};
