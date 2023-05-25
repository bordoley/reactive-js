/// <reference types="./Observable.ignoreElements.d.ts" />

import Enumerator_keep from "../../Enumerator/__internal__/Enumerator.keep.js";
import Observer_createKeepObserver from "../../Observer/__internal__/Observer.createKeepObserver.js";
import { alwaysFalse, partial, pipe, returns, } from "../../functions.js";
import Observable_empty from "./Observable.empty.js";
import Observable_isEnumerable from "./Observable.isEnumerable.js";
import Observable_isPure from "./Observable.isPure.js";
import Observable_liftPureObservableOperator from "./Observable.liftPureObservableOperator.js";
const Observable_ignoreElements = 
/*@__PURE__*/ (() => {
    const enumeratorOp = Enumerator_keep(alwaysFalse);
    const op = pipe((Observer_createKeepObserver), partial(alwaysFalse));
    const pureLift = Observable_liftPureObservableOperator(enumeratorOp, op);
    return returns((obs) => {
        const isPure = Observable_isPure(obs);
        const isEnumerable = Observable_isEnumerable(obs);
        return isPure && isEnumerable ? Observable_empty() : pureLift(obs);
    });
})();
export default Observable_ignoreElements;
