import { dispose, addTeardown, addDisposableDisposeParentOnChildError, } from "../../disposable.js";
import { pipe } from "../../functions.js";
import { isSome, none } from "../../option.js";
import { observe } from "./observable.js";
class OnSubscribeObservable {
    constructor(src, f) {
        this.src = src;
        this.f = f;
        this.isSynchronous = src.isSynchronous;
    }
    observe(observer) {
        try {
            pipe(this.src, observe(observer));
            const disposable = this.f() || none;
            if (disposable instanceof Function) {
                addTeardown(observer, disposable);
            }
            else if (isSome(disposable)) {
                addDisposableDisposeParentOnChildError(observer, disposable);
            }
        }
        catch (cause) {
            pipe(observer, dispose({ cause }));
        }
    }
}
export const onSubscribe = (f) => observable => new OnSubscribeObservable(observable, f);
