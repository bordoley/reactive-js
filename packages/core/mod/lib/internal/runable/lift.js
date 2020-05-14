import { pipe } from "../../functions.js";
class LiftedRunable {
    constructor(src, operators) {
        this.src = src;
        this.operators = operators;
    }
    run(sink) {
        pipe(sink, ...this.operators);
        this.src.run(sink);
    }
}
export const lift = (operator) => runable => {
    const src = runable instanceof LiftedRunable ? runable.src : runable;
    const allFunctions = runable instanceof LiftedRunable
        ? [...runable.operators, operator]
        : [operator];
    return new LiftedRunable(src, allFunctions);
};
