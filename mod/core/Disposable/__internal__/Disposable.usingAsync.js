/// <reference types="./Disposable.usingAsync.d.ts" />

import { DisposableLike_dispose } from "../../../core.js";
import ReadonlyArray_forEach from "../../../core/ReadonlyArray/__internal__/ReadonlyArray.forEach.js";
import ReadonlyArray_map from "../../../core/ReadonlyArray/__internal__/ReadonlyArray.map.js";
import { invoke, isFunction, pipe, } from "../../../functions.js";
const Disposable_usingAsync = ((...factoryOrDisposables) => async (f) => {
    const disposables = pipe(factoryOrDisposables, ReadonlyArray_map(factoryOrDisposable => isFunction(factoryOrDisposable)
        ? factoryOrDisposable()
        : factoryOrDisposable));
    try {
        return await f(...disposables);
    }
    finally {
        pipe(disposables, ReadonlyArray_forEach(invoke(DisposableLike_dispose)));
    }
});
export default Disposable_usingAsync;
