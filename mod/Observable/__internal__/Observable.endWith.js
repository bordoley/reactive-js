/// <reference types="./Observable.endWith.d.ts" />

import ReadonlyArray_toRunnable from "../../ReadonlyArray/__internal__/ReadonlyArray.toRunnable.js";
import { pipe } from "../../functions.js";
import Observable_concatWith from "./Observable.concatWith.js";
const Observable_endWith = ((...values) => 
// typed as DeferredObservableLike to avoid dealing with function overrides
(observable) => pipe(observable, Observable_concatWith(pipe(values, ReadonlyArray_toRunnable()))));
export default Observable_endWith;
