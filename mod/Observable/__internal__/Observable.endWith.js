/// <reference types="./Observable.endWith.d.ts" />

import ReadonlyArray_toObservable from "../../ReadonlyArray/__internal__/ReadonlyArray.toObservable.js";
import { pipe } from "../../functions.js";
import Observable_concatWith from "./Observable.concatWith.js";
const Observable_endWith = ((...values) => 
// typed as DeferredObservableLike to avoid dealing with function overrides
(observable) => pipe(observable, Observable_concatWith(pipe(values, ReadonlyArray_toObservable()))));
export default Observable_endWith;
