import { dispose } from "../../disposable.js";
import { none } from "../../option.js";
import { deferSynchronous, defer } from "./observable.js";
export const throws = (options = {}) => errorFactory => {
    const { delay = 0 } = options;
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
    return delay > 0 ? defer(factory, options) : deferSynchronous(factory);
};
