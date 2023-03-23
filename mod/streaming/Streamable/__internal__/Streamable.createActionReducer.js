/// <reference types="./Streamable.createActionReducer.d.ts" />

import Optional_toObservable from "../../../containers/Optional/__internal__/Optional.toObservable.js";
import { pipe, returns, } from "../../../functions.js";
import Observable_create from "../../../rx/Observable/__internal__/Observable.create.js";
import Observable_distinctUntilChanged from "../../../rx/Observable/__internal__/Observable.distinctUntilChanged.js";
import Observable_mergeWith from "../../../rx/Observable/__internal__/Observable.mergeWith.js";
import Observable_observeWith from "../../../rx/Observable/__internal__/Observable.observeWith.js";
import Observable_scan from "../../../rx/Observable/__internal__/Observable.scan.js";
import Streamable_createLifted from "./Streamable.createLifted.js";
const Streamable_createActionReducer = (reducer, initialState, options) => Streamable_createLifted(obs => Observable_create(observer => {
    const acc = initialState();
    pipe(obs, Observable_scan(reducer, returns(acc)), Observable_mergeWith(pipe(acc, Optional_toObservable())), Observable_distinctUntilChanged(options), Observable_observeWith(observer));
}), true, true, true);
export default Streamable_createActionReducer;
