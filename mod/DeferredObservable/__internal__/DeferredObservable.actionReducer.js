/// <reference types="./DeferredObservable.actionReducer.d.ts" />

import Observable_distinctUntilChanged from "../../Observable/__internal__/Observable.distinctUntilChanged.js";
import Observable_mergeWith from "../../Observable/__internal__/Observable.mergeWith.js";
import Observable_scan from "../../Observable/__internal__/Observable.scan.js";
import Optional_toObservable from "../../Optional/__internal__/Optional.toObservable.js";
import { pipe, returns } from "../../functions.js";
import DeferredObservable_defer from "./DeferredObservable.defer.js";
const DeferredObservable_actionReducer = (reducer, initialState, options) => obs => DeferredObservable_defer(() => {
    const acc = initialState();
    return pipe(obs, Observable_scan(reducer, returns(acc)), Observable_mergeWith(pipe(acc, Optional_toObservable())), Observable_distinctUntilChanged(options));
});
export default DeferredObservable_actionReducer;
