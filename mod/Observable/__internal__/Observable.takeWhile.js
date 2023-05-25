/// <reference types="./Observable.takeWhile.d.ts" />

import Enumerator_takeWhile from "../../Enumerator/__internal__/Enumerator.takeWhile.js";
import Observer_createTakeWhileObserver from "../../Observer/__internal__/Observer.createTakeWhileObserver.js";
import { partial, pipe } from "../../functions.js";
import Observable_liftPureObservableOperator from "./Observable.liftPureObservableOperator.js";
const Observable_takeWhile = ((predicate, options = {}) => {
    const { inclusive = false } = options;
    const op = pipe(Observer_createTakeWhileObserver, partial(predicate, inclusive));
    return Observable_liftPureObservableOperator(Enumerator_takeWhile(predicate, options), op);
});
export default Observable_takeWhile;
