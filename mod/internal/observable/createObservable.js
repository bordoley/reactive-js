import { defer } from "./observable.js";
import { toDispatcher } from "./toDispatcher.js";
export const createObservable = (onSubscribe) => defer(() => observer => {
    const dispatcher = toDispatcher(observer);
    onSubscribe(dispatcher);
});
