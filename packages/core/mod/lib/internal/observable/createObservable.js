import { dispose } from "../../disposable.js";
import { toDispatcher } from "./toDispatcher.js";
class CreateObservable {
    constructor(onSubscribe) {
        this.onSubscribe = onSubscribe;
        this.isSynchronous = false;
    }
    observe(observer) {
        const dispatcher = toDispatcher(observer);
        try {
            this.onSubscribe(dispatcher);
        }
        catch (cause) {
            dispose(observer, { cause });
        }
    }
}
export const createObservable = (onSubscribe) => new CreateObservable(onSubscribe);
