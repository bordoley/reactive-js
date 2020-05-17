import { dispose, addDisposableOrTeardown } from "../../disposable.js";
import { createRunnable } from "../../runnable.js";
import { createVirtualTimeScheduler, } from "../../scheduler.js";
import { pipe } from "../../functions.js";
import { none, isNone } from "../../option.js";
import { onNotify } from "./onNotify.js";
import { subscribe } from "./subscribe.js";
export const toRunnable = (schedulerFactory = createVirtualTimeScheduler) => source => createRunnable(sink => {
    const scheduler = schedulerFactory();
    let error = none;
    const subscription = pipe(source, onNotify((next) => {
        sink.notify(next);
    }), subscribe(scheduler), addDisposableOrTeardown(e => {
        error = e;
        if (isNone(e)) {
            sink.done();
        }
    }));
    scheduler.run();
    dispose(subscription);
    dispose(scheduler);
    const reifiedError = error;
    if (reifiedError !== none) {
        const { cause } = reifiedError;
        throw cause;
    }
});
