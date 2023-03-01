/// <reference types="./Observable.defer.d.ts" />

import { ObservableLike_observe } from "../../../rx.js";
import Observable_create from "./Observable.create.js";
const Observable_defer = (factory, isEnumerable = false, isRunnable = false) => Observable_create(observer => {
    factory()[ObservableLike_observe](observer);
}, isEnumerable, isRunnable);
export default Observable_defer;
