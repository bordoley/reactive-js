/// <reference types="./PauseableObservable.distinctUntilChanged.d.ts" />

import { partial, pipe, strictEquality } from "../../../functions.js";
import Observer_createDistinctUntilChangedObserver from "../../Observer/__internal__/Observer.createDistinctUntilChangedObserver.js";
import PauseableObservable_lift from "./PauseableObservable.lift.js";
const PauseableObservable_distinctUntilChanged = (options) => {
    const { equality = strictEquality } = options ?? {};
    return pipe(Observer_createDistinctUntilChangedObserver, partial(equality), (PauseableObservable_lift));
};
export default PauseableObservable_distinctUntilChanged;
