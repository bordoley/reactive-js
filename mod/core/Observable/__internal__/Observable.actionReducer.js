/// <reference types="./Observable.actionReducer.d.ts" />

import Optional_toObservable from "../../../core/Optional/__internal__/Optional.toObservable.js";
import { pipe, returns, } from "../../../functions.js";
import Observable_defer from "./Observable.defer.js";
import Observable_distinctUntilChanged from "./Observable.distinctUntilChanged.js";
import Observable_mergeWith from "./Observable.mergeWith.js";
import Observable_scan from "./Observable.scan.js";
const Observable_actionReducer = (reducer, initialState, options) => obs => Observable_defer(() => {
    const acc = initialState();
    return pipe(obs, Observable_scan(reducer, returns(acc)), Observable_mergeWith(pipe(acc, Optional_toObservable())), Observable_distinctUntilChanged(options));
});
export default Observable_actionReducer;
