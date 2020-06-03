import { toErrorHandler, dispose } from "../../disposable.js";
import { pipe } from "../../functions.js";
import { dispatch } from "./dispatcher.js";
import { defer } from "./observable.js";
import { toDispatcher } from "./toDispatcher.js";
export const fromPromise = (factory) => defer(() => observer => {
    const dispatcher = toDispatcher(observer);
    factory().then(next => {
        if (!dispatcher.isDisposed) {
            dispatch(dispatcher, next);
            pipe(dispatcher, dispose());
        }
    }, toErrorHandler(dispatcher));
});
