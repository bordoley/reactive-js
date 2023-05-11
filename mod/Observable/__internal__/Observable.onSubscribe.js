/// <reference types="./Observable.onSubscribe.d.ts" />

import Disposable_add from "../../Disposable/__internal__/Disposable.add.js";
import Disposable_onDisposed from "../../Disposable/__internal__/Disposable.onDisposed.js";
import { identity, isFunction, isSome, none, pipe, } from "../../functions.js";
import { ObservableLike_observe, } from "../../types.js";
import Observable_createWithConfig from "./Observable.createWithConfig.js";
const Observable_onSubscribe = ((f) => (obs) => Observable_createWithConfig(observer => {
    obs[ObservableLike_observe](observer);
    const disposable = f() || none;
    pipe(observer, isFunction(disposable)
        ? Disposable_onDisposed(disposable)
        : isSome(disposable)
            ? Disposable_add(disposable)
            : identity);
}, obs));
export default Observable_onSubscribe;
