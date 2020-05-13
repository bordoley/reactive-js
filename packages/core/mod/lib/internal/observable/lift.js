import { pipe } from "../../functions.js";
class LiftedObservable {
    constructor(source, operators, isSynchronous) {
        this.source = source;
        this.operators = operators;
        this.isSynchronous = isSynchronous;
    }
    subscribe(subscriber) {
        const liftedSubscrber = pipe(subscriber, ...this.operators);
        this.source.subscribe(liftedSubscrber);
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
