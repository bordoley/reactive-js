/// <reference types="./Runnable.fromValue.d.ts" />

import { ComputationLike_isPure, RunnableLike_eval, } from "../../../computations.js";
import { newInstance } from "../../../functions.js";
import { EventListenerLike_notify, SinkLike_complete, } from "../../../utils.js";
class FromValueRunnable {
    v;
    [ComputationLike_isPure] = true;
    constructor(v) {
        this.v = v;
    }
    [RunnableLike_eval](sink) {
        sink[EventListenerLike_notify](this.v);
        sink[SinkLike_complete]();
    }
}
const Runnable_fromValue = () => (v) => newInstance(FromValueRunnable, v);
export default Runnable_fromValue;
