import { dispose } from "../../disposable.js";
import { createScheduledObservable, createDelayedScheduledObservable, } from "./observable.js";
import { none } from "../../option.js";
export const throws = ({ delay } = { delay: 0 }) => errorFactory => {
    const factory = (observer) => (_) => {
        let cause = none;
        try {
            cause = errorFactory();
        }
        catch (e) {
            cause = e;
        }
        dispose(observer, { cause });
    };
    return delay > 0
        ? createDelayedScheduledObservable(factory, delay)
        : createScheduledObservable(factory, true);
};
