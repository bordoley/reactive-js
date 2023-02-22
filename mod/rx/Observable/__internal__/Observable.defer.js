/// <reference types="./Observable.defer.d.ts" />

import { ReactiveContainerLike_sinkInto } from "../../../rx.js";
import Observable_create from "./Observable.create.js";
const Observable_defer = (factory, isEnumerable = false, isRunnable = false) => Observable_create(observer => {
    factory()[ReactiveContainerLike_sinkInto](observer);
}, isEnumerable, isRunnable);
export default Observable_defer;
