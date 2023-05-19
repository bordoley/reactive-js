/// <reference types="./Disposable.usingImpl.d.ts" />

import ReadonlyArray_forEach from "../../ReadonlyArray/__internal__/ReadonlyArray.forEach.js";
import ReadonlyArray_map from "../../ReadonlyArray/__internal__/ReadonlyArray.map.js";
import { invoke, isFunction, pipe, } from "../../functions.js";
import { DisposableLike_dispose } from "../../types.js";
const Disposable_usingImpl = (f, factoryOrDisposables) => {
    const disposables = pipe(factoryOrDisposables, ReadonlyArray_map(factoryOrDisposable => isFunction(factoryOrDisposable)
        ? factoryOrDisposable()
        : factoryOrDisposable));
    try {
        return f(...disposables);
    }
    finally {
        pipe(disposables, ReadonlyArray_forEach(invoke(DisposableLike_dispose)));
    }
};
export default Disposable_usingImpl;
