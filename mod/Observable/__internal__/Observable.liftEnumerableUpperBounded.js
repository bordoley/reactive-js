/// <reference types="./Observable.liftEnumerableUpperBounded.d.ts" />

import Enumerable_create from "../../Enumerable/__internal__/Enumerable.create.js";
import { invoke, pipeLazy } from "../../functions.js";
import { EnumerableLike_enumerate, } from "../../types.js";
import Observable_isEnumerable from "./Observable.isEnumerable.js";
import Observable_liftRunnableUpperBounded from "./Observable.liftRunnableUpperBounded.js";
const Observable_liftEnumerableUpperBound = (enumeratorOperator, observerOperator) => {
    const lift = Observable_liftRunnableUpperBounded(observerOperator);
    return ((observable) => Observable_isEnumerable(observable)
        ? Enumerable_create(pipeLazy(observable, invoke(EnumerableLike_enumerate), enumeratorOperator))
        : lift(observable));
};
export default Observable_liftEnumerableUpperBound;
