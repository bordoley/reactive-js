/// <reference types="./Streamable.actionReducer.d.ts" />

import { ObservableLike_observe, } from "../../../concurrent.js";
import { invoke, pipe, returns, } from "../../../functions.js";
import * as Observable from "../../Observable.js";
import Streamable_create from "./Streamable.create.js";
const Observable_actionReducer = (reducer, initialState, options) => (obs) => Observable.create((observer) => {
    const acc = initialState();
    return pipe(obs, Observable.scan(reducer, returns(acc)), Observable.mergeWith(pipe([acc], Observable.fromIterable())), Observable.distinctUntilChanged(options), invoke(ObservableLike_observe, observer));
});
const Streamable_actionReducer = (reducer, initialState, options) => Streamable_create(Observable_actionReducer(reducer, initialState, options));
export default Streamable_actionReducer;
