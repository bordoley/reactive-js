/// <reference types="./Producer.scanDistinct.d.ts" />

import { SourceLike_subscribe, } from "../../../computations.js";
import { pipe, returns, } from "../../../functions.js";
import Computation_startWith from "../../Computation/__private__/Computation.startWith.js";
import * as Computation from "../../Computation.js";
import * as DeferredSource from "../../__internal__/DeferredSource.js";
import Producer_concat from "./Producer.concat.js";
import Producer_distinctUntilChanged from "./Producer.distinctUntilChanged.js";
import { Producer_genPure } from "./Producer.gen.js";
import Producer_scan from "./Producer.scan.js";
const m = Computation.makeModule()({
    concat: Producer_concat,
    genPure: Producer_genPure,
});
const Producer_scanDistinct = ((reducer, initialState, options) => (source) => DeferredSource.create((observer) => {
    const acc = initialState();
    const lifted = pipe(source, Producer_scan(reducer, returns(acc)), Computation_startWith(m, acc), x => x, Producer_distinctUntilChanged(options));
    lifted[SourceLike_subscribe](observer);
}, source));
export default Producer_scanDistinct;
