/// <reference types="./Observable.lift.d.ts" />

import Enumerable_lift from "../../Enumerable/__internal__/Enumerable.lift.js";
import Observable_isEnumerable from "./Observable.isEnumerable.js";
import Observable_liftRunnableUpperBounded from "./Observable.liftRunnableUpperBounded.js";
const Observable_lift = ((enumeratorOperator, observerOperator, isPure) => {
    const liftEnumerable = Enumerable_lift(observerOperator, enumeratorOperator, isPure);
    const liftObservable = Observable_liftRunnableUpperBounded(observerOperator);
    return ((observable) => Observable_isEnumerable(observable)
        ? liftEnumerable(observable)
        : liftObservable(observable));
});
export default Observable_lift;
