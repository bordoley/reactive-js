/// <reference types="./Observable.actionReducer.d.ts" />

import DeferredObservable_create from "../../DeferredObservable/__internal__/DeferredObservable.create.js";
import Optional_toObservable from "../../Optional/__internal__/Optional.toObservable.js";
import { invoke, pipe, returns, } from "../../functions.js";
import { ObservableLike_observe, } from "../../types.js";
import Observable_distinctUntilChanged from "./Observable.distinctUntilChanged.js";
import Observable_mergeWith from "./Observable.mergeWith.js";
import Observable_scan from "./Observable.scan.js";
const Observable_actionReducer = (reducer, initialState, options) => (obs) => DeferredObservable_create((observer) => {
    const acc = initialState();
    return pipe(obs, Observable_scan(reducer, returns(acc)), Observable_mergeWith(pipe(acc, Optional_toObservable())), Observable_distinctUntilChanged(options), invoke(ObservableLike_observe, observer));
});
export default Observable_actionReducer;
