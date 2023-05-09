/// <reference types="./DeferredObservable.forkConcat.d.ts" />

import Observable_concatObservables from "../../Observable/__internal__/Observable.concatObservables.js";
import ReadonlyArray_map from "../../ReadonlyArray/__internal__/ReadonlyArray.map.js";
import { pipe } from "../../functions.js";
const DeferredObservable_forkConcat = (...ops) => (obs) => pipe(ops, ReadonlyArray_map(op => op(obs)), Observable_concatObservables);
export default DeferredObservable_forkConcat;
