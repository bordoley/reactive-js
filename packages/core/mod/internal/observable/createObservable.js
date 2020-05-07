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
            subscriber.dispose({ cause });
        }
    }
}
export const createObservable = (onSubscribe) => new CreateObservable(onSubscribe);
