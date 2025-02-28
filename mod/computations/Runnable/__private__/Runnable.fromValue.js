/// <reference types="./Runnable.fromValue.d.ts" />

import { ComputationLike_isInteractive, ComputationLike_isPure, RunnableLike_eval, SinkLike_complete, SinkLike_next, } from "../../../computations.js";
import { newInstance } from "../../../functions.js";
class FromValueRunnable {
    v;
    [ComputationLike_isPure] = true;
    [ComputationLike_isInteractive] = false;
    constructor(v) {
        this.v = v;
    }
    [RunnableLike_eval](sink) {
        sink[SinkLike_next](this.v);
        sink[SinkLike_complete]();
    }
}
const Runnable_fromValue = () => (v) => newInstance(FromValueRunnable, v);
export default Runnable_fromValue;
