import { toErrorHandler, dispose } from "../../disposable.js";
import { pipe } from "../../functions.js";
import { defer } from "./observable.js";
import { toDispatcher } from "./toDispatcher.js";
export const fromPromise = (factory) => defer(() => observer => {
    const dispatcher = toDispatcher(observer);
    factory().then(next => {
        if (!dispatcher.isDisposed) {
            dispatcher.dispatch(next);
            pipe(dispatcher, dispose());
        }
    }, toErrorHandler(dispatcher));
});
