/// <reference types="./Observable.takeLast.d.ts" />

import Enumerator_takeLast from "../../Enumerator/__internal__/Enumerator.takeLast.js";
import Observer_createTakeLastObserver from "../../Observer/__internal__/Observer.createTakeLastObserver.js";
import { clampPositiveInteger } from "../../__internal__/math.js";
import { partial, pipe } from "../../functions.js";
import Observable_liftPureObservableOperator from "./Observable.liftPureObservableOperator.js";
const Observable_takeLast = (options = {}) => {
    const count = clampPositiveInteger(options.count ?? 1);
    const op = pipe(Observer_createTakeLastObserver, partial(count));
    return Observable_liftPureObservableOperator(Enumerator_takeLast(count), op);
};
export default Observable_takeLast;
