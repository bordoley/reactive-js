/// <reference types="./Disposable.usingAsyncImpl.d.ts" />

import * as ReadonlyArray from "../../../collections/ReadonlyArray.js";
import { isFunction, pipe } from "../../../functions.js";
import { DisposableLike_dispose } from "../../../utils.js";
const Disposable_usingAsyncImpl = async (f, factoryOrDisposables) => {
    const disposables = pipe(factoryOrDisposables, ReadonlyArray.map(factoryOrDisposable => isFunction(factoryOrDisposable)
        ? factoryOrDisposable()
        : factoryOrDisposable));
    try {
        return await f(...disposables);
    }
    finally {
        for (const disposable of disposables) {
            disposable[DisposableLike_dispose]();
        }
    }
};
export default Disposable_usingAsyncImpl;
