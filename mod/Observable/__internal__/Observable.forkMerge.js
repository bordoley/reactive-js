/// <reference types="./Observable.forkMerge.d.ts" />

import ReadonlyArray_map from "../../ReadonlyArray/__internal__/ReadonlyArray.map.js";
import { pipe } from "../../functions.js";
import Observable_mergeObservables from "./Observable.mergeObservables.js";
const Observable_forkMerge = (...ops) => (obs) => pipe(ops, ReadonlyArray_map(op => op(obs)), Observable_mergeObservables);
export default Observable_forkMerge;
