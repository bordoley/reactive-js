import { pipe } from "../../functions.js";
import { isSome } from "../../option.js";
import { createRunnable } from "../../runnable.js";
import { createVirtualTimeScheduler, } from "../../scheduler.js";
import { lift } from "./lift.js";
import { AbstractAutoDisposingDelegatingObserver } from "./observer.js";
import { subscribe } from "./subscribe.js";
class ToRunnableObserver extends AbstractAutoDisposingDelegatingObserver {
    constructor(delegate, sink) {
        super(delegate);
        this.sink = sink;
    }
    notify(next) {
        this.sink.notify(next);
    }
}
export const toRunnable = (options = {}) => source => createRunnable(sink => {
    const { schedulerFactory = createVirtualTimeScheduler } = options;
    const scheduler = schedulerFactory();
    const operator = (delegate) => new ToRunnableObserver(delegate, sink);
    operator.isSynchronous = true;
    const subscription = pipe(source, lift(operator), subscribe(scheduler));
    scheduler.run();
    const { error } = subscription;
    if (isSome(error)) {
        const { cause } = error;
        throw cause;
    }
    sink.done();
});
