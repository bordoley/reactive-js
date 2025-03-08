/// <reference types="./Runnable.fromIterable.d.ts" />

import { ComputationLike_isPure, RunnableLike_eval, } from "../../../computations.js";
import { newInstance } from "../../../functions.js";
import { SinkLike_complete, SinkLike_isComplete, SinkLike_next, } from "../../../utils.js";
import * as Computation from "../../Computation.js";
class FromIterableRunnable {
    i;
    [ComputationLike_isPure];
    constructor(i) {
        this.i = i;
        this[ComputationLike_isPure] = Computation.isPure(i);
    }
    [RunnableLike_eval](sink) {
        for (const v of this.i) {
            if (sink[SinkLike_isComplete]) {
                break;
            }
            sink[SinkLike_next](v);
        }
        sink[SinkLike_complete]();
    }
}
const Runnable_fromIterable = (() => (iterable) => newInstance((FromIterableRunnable), iterable));
export default Runnable_fromIterable;
