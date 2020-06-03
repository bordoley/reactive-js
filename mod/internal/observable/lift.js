import { pipe } from "../../functions.js";
import { observe } from "./observable.js";
class LiftedObservable {
    constructor(source, operators, isSynchronous) {
        this.source = source;
        this.operators = operators;
        this.isSynchronous = isSynchronous;
    }
    observe(observer) {
        const liftedSubscrber = pipe(observer, ...this.operators);
        pipe(this.source, observe(liftedSubscrber));
    }
}
export const lift = (operator) => source => {
    const sourceSource = source instanceof LiftedObservable ? source.source : source;
    const allFunctions = source instanceof LiftedObservable
        ? [operator, ...source.operators]
        : [operator];
    const isSynchronous = source.isSynchronous && operator.isSynchronous;
    return new LiftedObservable(sourceSource, allFunctions, isSynchronous);
};
