/// <reference types="./Runnable.empty.d.ts" />

import { ComputationLike_isInteractive, ComputationLike_isPure, RunnableLike_eval, SinkLike_complete, } from "../../../computations.js";
import { newInstance, returns } from "../../../functions.js";
class EmptyRunnable {
    [ComputationLike_isPure] = true;
    [ComputationLike_isInteractive] = false;
    [RunnableLike_eval](sink) {
        sink[SinkLike_complete]();
    }
}
const Runnable_empty = /*@__PURE__*/ (() => returns(newInstance(EmptyRunnable)))();
export default Runnable_empty;
