/// <reference types="./Observable.liftEnumerableUpperBounded.d.ts" />

import Enumerable_lift from "../../Enumerable/__internal__/Enumerable.lift.js";
import Observable_isEnumerable from "./Observable.isEnumerable.js";
import Observable_liftRunnableUpperBounded from "./Observable.liftRunnableUpperBounded.js";
const Observable_liftEnumerableUpperBound = (enumeratorOperator, observerOperator) => {
    const liftEnumerable = Enumerable_lift(observerOperator, enumeratorOperator);
    const liftObservable = Observable_liftRunnableUpperBounded(observerOperator);
    return ((observable) => Observable_isEnumerable(observable)
        ? liftEnumerable(observable)
        : liftObservable(observable));
};
export default Observable_liftEnumerableUpperBound;
