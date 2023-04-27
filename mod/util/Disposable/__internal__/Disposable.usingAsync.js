/// <reference types="./Disposable.usingAsync.d.ts" />

import { invoke, isFunction, pipe, } from "../../../functions.js";
import ReadonlyArray_forEach from "../../../keyed-containers/ReadonlyArray/__internal__/ReadonlyArray.forEach.js";
import ReadonlyArray_map from "../../../keyed-containers/ReadonlyArray/__internal__/ReadonlyArray.map.js";
import { DisposableLike_dispose } from "../../../util.js";
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
