import { pipe } from "../../functions.js";
class LiftedRunnable {
    constructor(src, operators) {
        this.src = src;
        this.operators = operators;
    }
    run(sink) {
        pipe(sink, ...this.operators);
        this.src.run(sink);
    }
}
export const lift = (operator) => runnable => {
    const src = runnable instanceof LiftedRunnable ? runnable.src : runnable;
    const allFunctions = runnable instanceof LiftedRunnable
        ? [...runnable.operators, operator]
        : [operator];
    return new LiftedRunnable(src, allFunctions);
};
