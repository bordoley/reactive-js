/// <reference types="./Observable.distinctUntilChanged.d.ts" />

import Observer_createDistinctUntilChangedObserver from "../../Observer/__internal__/Observer.createDistinctUntilChangedObserver.js";
import { partial, pipe, strictEquality } from "../../functions.js";
import Observable_liftSource from "./Observable.liftSource.js";
const Observable_distinctUntilChanged = (options) => {
    const { equality = strictEquality } = options ?? {};
    return pipe(Observer_createDistinctUntilChangedObserver, partial(equality), Observable_liftSource);
};
export default Observable_distinctUntilChanged;
