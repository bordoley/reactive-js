/// <reference types="./Streamable.actionReducer.d.ts" />

import * as Computation from "../../../computations/Computation.js";
import { ObservableLike_observe, } from "../../../computations.js";
import { invoke, pipe, returns, } from "../../../functions.js";
import * as Observable from "../../Observable.js";
import Streamable_create from "./Streamable.create.js";
const ObservableModule = { merge: Observable.merge };
const Observable_actionReducer = (reducer, initialState, options) => (obs) => Observable.create((observer) => {
    const acc = initialState();
    return pipe(obs, Observable.scan(reducer, returns(acc)), Computation.mergeWith(ObservableModule)(pipe(acc, Observable.fromValue())), Observable.distinctUntilChanged(options), invoke(ObservableLike_observe, observer));
});
const Streamable_actionReducer = (reducer, initialState, options) => Streamable_create(Observable_actionReducer(reducer, initialState, options));
export default Streamable_actionReducer;
