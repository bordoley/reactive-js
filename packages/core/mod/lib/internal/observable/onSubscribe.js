import { dispose, add } from "../../disposable.js";
import { isSome, none } from "../../option.js";
class OnSubscribeObservable {
    constructor(src, f) {
        this.src = src;
        this.f = f;
        this.isSynchronous = false;
    }
    observe(observer) {
        try {
            this.src.observe(observer);
            const disposable = this.f() || none;
            if (isSome(disposable)) {
                add(observer, disposable);
            }
        }
        catch (cause) {
            dispose(observer, { cause });
        }
    }
}
export const onSubscribe = (f) => observable => new OnSubscribeObservable(observable, f);
