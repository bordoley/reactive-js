/// <reference types="./Observable.startWith.d.ts" />

import { pipe } from "../../../functions.js";
import Observable_concatWith from "./Observable.concatWith.js";
import Observable_fromReadonlyArray from "./Observable.fromReadonlyArray.js";
const Observable_startWith = ((...values) => 
// typed as DeferredObservableWithSideEffectsLike to avoid dealing with function overrides
(observable) => pipe(values, Observable_fromReadonlyArray(), Observable_concatWith(observable)));
export default Observable_startWith;
