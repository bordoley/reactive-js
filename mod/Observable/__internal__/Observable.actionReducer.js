/// <reference types="./Observable.actionReducer.d.ts" />

import Observable_create from "../../Observable/__internal__/Observable.create.js";
import Observable_fromOptional from "../../Observable/__internal__/Observable.fromOptional.js";
import { invoke, pipe, returns, } from "../../functions.js";
import { ObservableLike_observe, } from "../../types.js";
import Observable_distinctUntilChanged from "./Observable.distinctUntilChanged.js";
import Observable_mergeWith from "./Observable.mergeWith.js";
import Observable_scan from "./Observable.scan.js";
const Observable_actionReducer = (reducer, initialState, options) => (obs) => Observable_create((observer) => {
    const acc = initialState();
    return pipe(obs, Observable_scan(reducer, returns(acc)), Observable_mergeWith(pipe(acc, Observable_fromOptional())), Observable_distinctUntilChanged(options), invoke(ObservableLike_observe, observer));
});
export default Observable_actionReducer;
