/// <reference types="./Disposable.usingAsyncImpl.d.ts" />

import * as ReadonlyArray from "../../../collections/ReadonlyArray.js";
import { pipe } from "../../../functions.js";
import { DisposableLike_dispose } from "../../../utils.js";
const Disposable_usingAsyncImpl = async (f, factories) => {
    const disposables = pipe(factories, ReadonlyArray.map(factory => factory()));
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
