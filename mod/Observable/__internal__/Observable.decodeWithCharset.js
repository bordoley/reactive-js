/// <reference types="./Observable.decodeWithCharset.d.ts" />

import Enumerator_decodeWithCharset from "../../Enumerator/__internal__/Enumerator.decodeWithCharset.js";
import Observer_createDecodeWithCharsetObserver from "../../Observer/__internal__/Observer.createDecodeWithCharsetObserver.js";
import { partial, pipe } from "../../functions.js";
import Observable_liftPureObservableOperator from "./Observable.liftPureObservableOperator.js";
const Observable_decodeWithCharset = options => {
    const charset = options?.charset ?? "utf-8";
    const op = pipe(Observer_createDecodeWithCharsetObserver, partial(charset));
    return Observable_liftPureObservableOperator(Enumerator_decodeWithCharset(charset), op);
};
export default Observable_decodeWithCharset;
