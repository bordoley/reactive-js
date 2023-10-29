/// <reference types="./Observable.endWith.d.ts" />

import { pipe } from "../../../functions.js";
import Observable_concatWith from "./Observable.concatWith.js";
import Observable_fromReadonlyArray from "./Observable.fromReadonlyArray.js";
const Observable_endWith = ((...values) => 
// typed as DeferredObservableLike to avoid dealing with function overrides
(observable) => pipe(observable, Observable_concatWith(pipe(values, Observable_fromReadonlyArray()))));
export default Observable_endWith;
