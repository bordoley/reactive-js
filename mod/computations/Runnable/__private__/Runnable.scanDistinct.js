/// <reference types="./Runnable.scanDistinct.d.ts" />

import { ComputationLike_isPure, RunnableLike_eval, } from "../../../computations.js";
import { error, invoke, newInstance, pipe, returns, } from "../../../functions.js";
import { DisposableLike_dispose } from "../../../utils.js";
import Computation_startWith from "../../Computation/__private__/Computation.startWith.js";
import * as Computation from "../../Computation.js";
import Runnable_concat from "./Runnable.concat.js";
import Runnable_distinctUntilChanged from "./Runnable.distinctUntilChanged.js";
import { Runnable_genPure } from "./Runnable.gen.js";
import Runnable_scan from "./Runnable.scan.js";
const m = Computation.makeModule()({
    concat: Runnable_concat,
    genPure: Runnable_genPure,
});
class ActionReducerRunnable {
    s;
    r;
    f;
    o;
    [ComputationLike_isPure];
    constructor(s, r, f, o) {
        this.s = s;
        this.r = r;
        this.f = f;
        this.o = o;
        this[ComputationLike_isPure] = Computation.isPure(s);
    }
    [RunnableLike_eval](sink) {
        const { s: src, r: reducer, f: initialValue, o: options } = this;
        try {
            const acc = initialValue();
            pipe(src, Runnable_scan(reducer, returns(acc)), Computation_startWith(m)(acc), Runnable_distinctUntilChanged(options), invoke(RunnableLike_eval, sink));
        }
        catch (e) {
            sink[DisposableLike_dispose](error(e));
        }
    }
}
const Runnable_scanDistinct = ((reducer, initialState, options) => (runnable) => newInstance(ActionReducerRunnable, runnable, reducer, initialState, options));
export default Runnable_scanDistinct;
