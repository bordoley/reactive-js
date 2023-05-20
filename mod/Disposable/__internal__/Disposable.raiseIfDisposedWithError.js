/// <reference types="./Disposable.raiseIfDisposedWithError.d.ts" />

import { isSome, raiseError } from "../../functions.js";
import { DisposableLike_error } from "../../types.js";
const Disposable_raiseIfDisposedWithError = (disposable) => {
    const err = disposable[DisposableLike_error];
    if (isSome(err)) {
        raiseError(err);
    }
};
export default Disposable_raiseIfDisposedWithError;
