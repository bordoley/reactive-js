import { dispose } from "../../disposable.js";
import { none } from "../../option.js";
import { deferSynchronous, defer, } from "./observable.js";
export const throws = (options = { delay: 0 }) => errorFactory => {
    const { delay } = options;
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
        ? defer(factory, options)
        : deferSynchronous(factory);
};
