/// <reference types="./Observable.scanDistinct.d.ts" />

import { EventSourceLike_subscribe, } from "../../../computations.js";
import { pipe, returns, } from "../../../functions.js";
import Computation_startWith from "../../Computation/__private__/Computation.startWith.js";
import * as Computation from "../../Computation.js";
import * as DeferredEventSource from "../../__internal__/DeferredEventSource.js";
import Observable_concat from "./Observable.concat.js";
import Observable_distinctUntilChanged from "./Observable.distinctUntilChanged.js";
import { Observable_genPure } from "./Observable.gen.js";
import Observable_scan from "./Observable.scan.js";
const m = Computation.makeModule({
    concat: Observable_concat,
    genPure: Observable_genPure,
});
const Observable_scanDistinct = ((reducer, initialState, options) => (source) => DeferredEventSource.create((observer) => {
    const acc = initialState();
    const lifted = pipe(source, Observable_scan(reducer, returns(acc)), Computation_startWith(m, acc), x => x, Observable_distinctUntilChanged(options));
    lifted[EventSourceLike_subscribe](observer);
}, source));
export default Observable_scanDistinct;
