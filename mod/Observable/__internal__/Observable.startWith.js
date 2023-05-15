/// <reference types="./Observable.startWith.d.ts" />

import ReadonlyArray_toObservable from "../../ReadonlyArray/__internal__/ReadonlyArray.toObservable.js";
import { pipe } from "../../functions.js";
import Observable_concatWith from "./Observable.concatWith.js";
const Observable_startWith = ((...values) => 
// typed as DeferredObservableLike to avoid dealing with function overrides
(observable) => pipe(values, ReadonlyArray_toObservable(), Observable_concatWith(observable)));
export default Observable_startWith;
