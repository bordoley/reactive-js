import { pipe } from "../../functions.js";
import { isSome } from "../../option.js";
import { createRunnable } from "../../runnable.js";
import { createVirtualTimeScheduler, } from "../../scheduler.js";
import { onNotify } from "./onNotify.js";
import { subscribe } from "./subscribe.js";
export const toRunnable = (options = {}) => source => createRunnable(sink => {
    const { schedulerFactory = createVirtualTimeScheduler } = options;
    const scheduler = schedulerFactory();
    const subscription = pipe(source, onNotify((next) => {
        sink.notify(next);
    }), subscribe(scheduler));
    scheduler.run();
    const { error } = subscription;
    if (isSome(error)) {
        const { cause } = error;
        throw cause;
    }
    sink.done();
});
