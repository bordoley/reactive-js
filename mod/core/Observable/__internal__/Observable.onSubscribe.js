/// <reference types="./Observable.onSubscribe.d.ts" />

import { ObservableLike_observe, } from "../../../core.js";
import Disposable_add from "../../../core/Disposable/__internal__/Disposable.add.js";
import Disposable_onDisposed from "../../../core/Disposable/__internal__/Disposable.onDisposed.js";
import Observable_create from "../../../core/Observable/__internal__/Observable.create.js";
import { identity, isFunction, isSome, none, pipe, } from "../../../functions.js";
import DeferredObservable_create from "../../DeferredObservable/__internal__/DeferredObservable.create.js";
import Enumerable_create from "../../Enumerable/__internal__/Enumerable.create.js";
import Runnable_create from "../../Runnable/__internal__/Runnable.create.js";
import Observable_isDeferred from "./Observable.isDeferred.js";
import Observable_isEnumerable from "./Observable.isEnumerable.js";
import Observable_isRunnable from "./Observable.isRunnable.js";
// FIXME: improve return type.
const Observable_onSubscribe = ((f) => (obs) => {
    const create = Observable_isEnumerable(obs)
        ? Enumerable_create
        : Observable_isRunnable(obs)
            ? Runnable_create
            : Observable_isDeferred(obs)
                ? DeferredObservable_create
                : Observable_create;
    return create(observer => {
        obs[ObservableLike_observe](observer);
        const disposable = f() || none;
        pipe(observer, isFunction(disposable)
            ? Disposable_onDisposed(disposable)
            : isSome(disposable)
                ? Disposable_add(disposable)
                : identity);
    });
});
export default Observable_onSubscribe;
