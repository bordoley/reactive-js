import { dispose } from "../../disposable.js";
import { none } from "../../option.js";
import { createScheduledObservable, createDelayedScheduledObservable, } from "./observable.js";
export const throws = ({ delay } = { delay: 0 }) => errorFactory => {
    const factory = () => (observer) => {
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
