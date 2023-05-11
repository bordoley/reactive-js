/// <reference types="./Observable.takeWhile.d.ts" />

import Observer_createTakeWhileObserver from "../../Observer/__internal__/Observer.createTakeWhileObserver.js";
import { partial, pipe } from "../../functions.js";
import Observable_liftEnumerableUpperBounded from "./Observable.liftEnumerableUpperBounded.js";
const Observable_takeWhile = (predicate, options = {}) => {
    const { inclusive = false } = options;
    return pipe(Observer_createTakeWhileObserver, partial(predicate, inclusive), Observable_liftEnumerableUpperBounded);
};
export default Observable_takeWhile;
