/// <reference types="./Runnable.lift.d.ts" />

import { newInstance, pipeUnsafe } from "../../../functions.js";
import { ReactiveContainerLike_sinkInto, } from "../../../rx.js";
import Sink_sourceFrom from "../../Sink/__internal__/Sink.sourceFrom.js";
const LiftedRunnable_src = Symbol("LiftedRunnable_src");
const LiftedRunnable_operators = Symbol("LiftedRunnable_operators");
class LiftedRunnable {
    constructor(src, operators) {
        this[LiftedRunnable_src] = src;
        this[LiftedRunnable_operators] = operators;
    }
    [ReactiveContainerLike_sinkInto](sink) {
        pipeUnsafe(sink, ...this[LiftedRunnable_operators], Sink_sourceFrom(this[LiftedRunnable_src]));
    }
}
const Runnable_lift = /*@__PURE__*/ (() => {
    return (operator) => (runnable) => {
        const src = runnable instanceof LiftedRunnable
            ? runnable[LiftedRunnable_src]
            : runnable;
        const allFunctions = runnable instanceof LiftedRunnable
            ? [operator, ...runnable[LiftedRunnable_operators]]
            : [operator];
        return newInstance(LiftedRunnable, src, allFunctions);
    };
})();
export default Runnable_lift;
