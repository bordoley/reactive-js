/// <reference types="./Observable.distinctUntilChanged.d.ts" />

import Observer_createDistinctUntilChangedObserver from "../../Observer/__internal__/Observer.createDistinctUntilChangedObserver.js";
import { partial, pipe, strictEquality } from "../../functions.js";
import Observable_liftEnumerableUpperBounded from "./Observable.liftEnumerableUpperBounded.js";
const Observable_distinctUntilChanged = (options) => {
    const { equality = strictEquality } = options ?? {};
    return pipe(Observer_createDistinctUntilChangedObserver, partial(equality), Observable_liftEnumerableUpperBounded);
};
export default Observable_distinctUntilChanged;
