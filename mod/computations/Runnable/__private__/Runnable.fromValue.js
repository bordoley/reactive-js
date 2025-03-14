/// <reference types="./Runnable.fromValue.d.ts" />

import { ComputationLike_isPure, RunnableLike_eval, } from "../../../computations.js";
import { newInstance } from "../../../functions.js";
import { SinkLike_complete, SinkLike_push } from "../../../utils.js";
class FromValueRunnable {
    v;
    [ComputationLike_isPure] = true;
    constructor(v) {
        this.v = v;
    }
    [RunnableLike_eval](sink) {
        sink[SinkLike_push](this.v);
        sink[SinkLike_complete]();
    }
}
const Runnable_fromValue = () => (v) => newInstance(FromValueRunnable, v);
export default Runnable_fromValue;
