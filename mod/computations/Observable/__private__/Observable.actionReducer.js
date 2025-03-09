/// <reference types="./Observable.actionReducer.d.ts" />

import { ObservableLike_observe, } from "../../../computations.js";
import { invoke, pipe, returns, } from "../../../functions.js";
import * as Computation from "../../Computation.js";
import Observable_concat from "./Observable.concat.js";
import Observable_create from "./Observable.create.js";
import Observable_createPureDeferredObservable from "./Observable.createPureDeferredObservable.js";
import Observable_createPureSynchronousObservable from "./Observable.createPureSynchronousObservable.js";
import Observable_createSynchronousObservableWithSideEffects from "./Observable.createSynchronousObservableWithSideEffects.js";
import Observable_distinctUntilChanged from "./Observable.distinctUntilChanged.js";
import Observable_fromReadonlyArray from "./Observable.fromReadonlyArray.js";
import Observable_scan from "./Observable.scan.js";
const ObservableModule = {
    concat: Observable_concat,
    fromReadonlyArray: Observable_fromReadonlyArray,
};
const Observable_actionReducer = ((reducer, initialState, options) => (obs) => {
    const create = Computation.isPureSynchronous(obs)
        ? Observable_createPureSynchronousObservable
        : Computation.isSynchronousWithSideEffects(obs)
            ? Observable_createSynchronousObservableWithSideEffects
            : Computation.isPureDeferred(obs)
                ? Observable_createPureDeferredObservable
                : Observable_create;
    return create(observer => {
        const acc = initialState();
        pipe(obs, Observable_scan(reducer, returns(acc)), Computation.startWith(ObservableModule)(acc), Observable_distinctUntilChanged(options), invoke(ObservableLike_observe, observer));
    });
});
export default Observable_actionReducer;
