/// <reference types="./Observable.decodeWithCharset.d.ts" />

import Observer_createDecodeWithCharsetObserver from "../../Observer/__internal__/Observer.createDecodeWithCharsetObserver.js";
import { partial, pipe } from "../../functions.js";
import Observable_liftEnumerableUpperBounded from "./Observable.liftEnumerableUpperBounded.js";
const Observable_decodeWithCharset = options => {
    const charset = options?.charset ?? "utf-8";
    return pipe(Observer_createDecodeWithCharsetObserver, partial(charset), Observable_liftEnumerableUpperBounded);
};
export default Observable_decodeWithCharset;
