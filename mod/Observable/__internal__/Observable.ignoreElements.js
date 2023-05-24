/// <reference types="./Observable.ignoreElements.d.ts" />

import Enumerator_keep from "../../Enumerator/__internal__/Enumerator.keep.js";
import Observer_createKeepObserver from "../../Observer/__internal__/Observer.createKeepObserver.js";
import { alwaysFalse, partial, pipe, returns, } from "../../functions.js";
import Observable_liftWithSideEffects from "./Observable.liftWithSideEffects.js";
const Observable_ignoreElements = 
/*@__PURE__*/ (() => {
    const enumeratorOp = Enumerator_keep(alwaysFalse);
    const op = pipe((Observer_createKeepObserver), partial(alwaysFalse));
    return returns(Observable_liftWithSideEffects(enumeratorOp, op));
})();
export default Observable_ignoreElements;
