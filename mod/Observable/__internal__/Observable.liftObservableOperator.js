/// <reference types="./Observable.liftObservableOperator.d.ts" />

import EnumerableBase_lift from "../../EnumerableBase/__internal__/EnumerableBase.lift.js";
import Observable_isEnumerable from "./Observable.isEnumerable.js";
import Observable_liftRunnableBoundedPureObservableOperator from "./Observable.liftRunnableBoundedPureObservableOperator.js";
const Observable_liftObservableOperator = ((enumeratorOperator, observerOperator, isPure) => {
    const liftEnumerable = EnumerableBase_lift(observerOperator, enumeratorOperator, isPure);
    const liftObservable = Observable_liftRunnableBoundedPureObservableOperator(observerOperator);
    return (observable) => Observable_isEnumerable(observable)
        ? liftEnumerable(observable)
        : liftObservable(observable);
});
export default Observable_liftObservableOperator;
