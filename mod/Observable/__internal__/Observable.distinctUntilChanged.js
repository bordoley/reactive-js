/// <reference types="./Observable.distinctUntilChanged.d.ts" />

import Enumerator_distinctUntilChanged from "../../Enumerator/__internal__/Enumerator.distinctUntilChanged.js";
import Observer_createDistinctUntilChangedObserver from "../../Observer/__internal__/Observer.createDistinctUntilChangedObserver.js";
import { partial, pipe, strictEquality } from "../../functions.js";
import Observable_liftPure from "./Observable.liftPure.js";
const Observable_distinctUntilChanged = (options) => {
    const { equality = strictEquality } = options ?? {};
    const op = pipe(Observer_createDistinctUntilChangedObserver, partial(equality));
    return Observable_liftPure(Enumerator_distinctUntilChanged(options), op);
};
export default Observable_distinctUntilChanged;
