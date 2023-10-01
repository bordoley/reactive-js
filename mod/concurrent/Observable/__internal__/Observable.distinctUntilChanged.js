/// <reference types="./Observable.distinctUntilChanged.d.ts" />

import { partial, pipe, strictEquality } from "../../../functions.js";
import Observer_createDistinctUntilChangedObserver from "../../Observer/__internal__/Observer.createDistinctUntilChangedObserver.js";
import Observable_liftPure from "./Observable.liftPure.js";
const Observable_distinctUntilChanged = (options) => pipe(Observer_createDistinctUntilChangedObserver, partial(options?.equality ?? strictEquality), Observable_liftPure);
export default Observable_distinctUntilChanged;
