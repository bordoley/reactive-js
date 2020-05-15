import { pipe } from "../../functions.js";
class LiftedRunnable {
    constructor(src, operators) {
        this.src = src;
        this.operators = operators;
    }
    run(sink) {
        const liftedSink = pipe(sink, ...this.operators);
        this.src.run(liftedSink);
    }
}
export const lift = (operator) => runnable => {
    const src = runnable instanceof LiftedRunnable ? runnable.src : runnable;
    const allFunctions = runnable instanceof LiftedRunnable
        ? [operator, ...runnable.operators]
        : [operator];
    return new LiftedRunnable(src, allFunctions);
};
