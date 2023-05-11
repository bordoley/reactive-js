/// <reference types="./Observable.startWith.d.ts" />

import ReadonlyArray_toRunnable from "../../ReadonlyArray/__internal__/ReadonlyArray.toRunnable.js";
import { pipe } from "../../functions.js";
import Observable_concatWith from "./Observable.concatWith.js";
const Observable_startWith = ((...values) => 
// typed as DeferredObservableLike to avoid dealing with function overrides
(observable) => pipe(values, ReadonlyArray_toRunnable(), Observable_concatWith(observable)));
export default Observable_startWith;
