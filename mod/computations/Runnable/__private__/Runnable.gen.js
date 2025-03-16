/// <reference types="./Runnable.gen.d.ts" />

import { ComputationLike_isDeferred, ComputationLike_isPure, ComputationLike_isSynchronous, RunnableLike_eval, } from "../../../computations.js";
import { newInstance } from "../../../functions.js";
import { EventListenerLike_notify, SinkLike_complete, SinkLike_isCompleted, } from "../../../utils.js";
class GenRunnable {
    f;
    [ComputationLike_isPure] = true;
    [ComputationLike_isDeferred] = false;
    [ComputationLike_isSynchronous] = true;
    constructor(f) {
        this.f = f;
    }
    [RunnableLike_eval](sink) {
        const iter = this.f();
        for (const v of iter) {
            if (sink[SinkLike_isCompleted]) {
                break;
            }
            sink[EventListenerLike_notify](v);
        }
        sink[SinkLike_complete]();
    }
}
const Runnable_gen = (factory) => newInstance((GenRunnable), factory);
export default Runnable_gen;
