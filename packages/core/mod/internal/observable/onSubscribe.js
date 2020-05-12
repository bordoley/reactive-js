import { dispose, add } from "../../disposable.js";
import { isSome, none } from "../../option.js";
class OnSubscribeObservable {
    constructor(src, f) {
        this.src = src;
        this.f = f;
        this.isSynchronous = false;
    }
    subscribe(subscriber) {
        try {
            this.src.subscribe(subscriber);
            const disposable = this.f() || none;
            if (isSome(disposable)) {
                add(subscriber, disposable);
            }
        }
        catch (cause) {
            dispose(subscriber, { cause });
        }
    }
}
export const onSubscribe = (f) => observable => new OnSubscribeObservable(observable, f);
