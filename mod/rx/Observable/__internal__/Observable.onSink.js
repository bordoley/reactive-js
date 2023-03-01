/// <reference types="./Observable.onSink.d.ts" />

import { identity, isFunction, isSome, none, pipe, } from "../../../functions.js";
import Disposable_add from "../../../util/Disposable/__internal__/Disposable.add.js";
import Disposable_onDisposed from "../../../util/Disposable/__internal__/Disposable.onDisposed.js";
import Observable_observeWith from "./Observable.observeWith.js";
const Observable_onSink = (createObservable, src, f) => createObservable(observer => {
    pipe(src, Observable_observeWith(observer));
    const disposable = f() || none;
    pipe(observer, isFunction(disposable)
        ? Disposable_onDisposed(disposable)
        : isSome(disposable)
            ? Disposable_add(disposable)
            : identity);
});
export default Observable_onSink;
