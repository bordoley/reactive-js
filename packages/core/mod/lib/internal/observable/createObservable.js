import { dispose } from "../../disposable.js";
import { toDispatcher } from "./toDispatcher.js";
class CreateObservable {
    constructor(onSubscribe) {
        this.onSubscribe = onSubscribe;
        this.isSynchronous = false;
    }
    subscribe(subscriber) {
        const dispatcher = toDispatcher(subscriber);
        try {
            this.onSubscribe(dispatcher);
        }
        catch (cause) {
            dispose(subscriber, { cause });
        }
    }
}
export const createObservable = (onSubscribe) => new CreateObservable(onSubscribe);
