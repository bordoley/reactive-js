/// <reference types="./Observable.onSubscribe.d.ts" />

import { identity, isFunction, isSome, none, pipe, } from "../../../functions.js";
import { ObservableLike_observe } from "../../../rx.js";
import Observable_create from "../../../rx/Observable/__internal__/Observable.create.js";
import Disposable_add from "../../../util/Disposable/__internal__/Disposable.add.js";
import Disposable_onDisposed from "../../../util/Disposable/__internal__/Disposable.onDisposed.js";
const Observable_onSubscribe = (f) => (obs) => Observable_create(observer => {
    obs[ObservableLike_observe](observer);
    const disposable = f() || none;
    pipe(observer, isFunction(disposable)
        ? Disposable_onDisposed(disposable)
        : isSome(disposable)
            ? Disposable_add(disposable)
            : identity);
});
export default Observable_onSubscribe;
