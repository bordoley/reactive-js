/// <reference types="./Runnable.lift.d.ts" />
import { pipeUnsafe, newInstance } from '../../../functions.mjs';
import { ReactiveContainerLike_sinkInto } from '../../../rx.mjs';
import Sink$sourceFrom from '../Sink/Sink.sourceFrom.mjs';

const Runnable$lift = 
/*@__PURE__*/ (() => {
    class LiftedRunnable {
        constructor(src, operators) {
            this.src = src;
            this.operators = operators;
        }
        [ReactiveContainerLike_sinkInto](sink) {
            pipeUnsafe(sink, ...this.operators, Sink$sourceFrom(this.src));
        }
    }
    return (operator) => (runnable) => {
        const src = runnable instanceof LiftedRunnable ? runnable.src : runnable;
        const allFunctions = runnable instanceof LiftedRunnable
            ? [operator, ...runnable.operators]
            : [operator];
        return newInstance(LiftedRunnable, src, allFunctions);
    };
})();

export { Runnable$lift as default };
