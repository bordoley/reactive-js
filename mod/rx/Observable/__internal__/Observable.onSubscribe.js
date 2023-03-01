/// <reference types="./Observable.onSubscribe.d.ts" />

import { identity, isFunction, isSome, none, pipe, } from "../../../functions.js";
import Observable_create from "../../../rx/Observable/__internal__/Observable.create.js";
import Disposable_add from "../../../util/Disposable/__internal__/Disposable.add.js";
import Disposable_onDisposed from "../../../util/Disposable/__internal__/Disposable.onDisposed.js";
import Observable_observeWith from "./Observable.observeWith.js";
const Observable_onSubscribe = (f) => (obs) => Observable_create(observer => {
    pipe(obs, Observable_observeWith(observer));
    const disposable = f() || none;
    pipe(observer, isFunction(disposable)
        ? Disposable_onDisposed(disposable)
        : isSome(disposable)
            ? Disposable_add(disposable)
            : identity);
});
export default Observable_onSubscribe;
