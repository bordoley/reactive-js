/// <reference types="./Runnable.empty.d.ts" />

import { ComputationLike_isDeferred, ComputationLike_isPure, RunnableLike_eval, } from "../../../computations.js";
import { newInstance, returns } from "../../../functions.js";
import { SinkLike_complete } from "../../../utils.js";
class EmptyRunnable {
    [ComputationLike_isPure] = true;
    [ComputationLike_isDeferred] = false;
    [RunnableLike_eval](sink) {
        sink[SinkLike_complete]();
    }
}
const Runnable_empty = /*@__PURE__*/ (() => returns(newInstance(EmptyRunnable)))();
export default Runnable_empty;
