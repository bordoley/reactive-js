/// <reference types="./Observable.forkZip.d.ts" />

import ReadonlyArray_map from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.map.js";
import { pipe } from "../../../functions.js";
import Observable_zipObservables from "./Observable.zipObservables.js";
const Observable_forkZip = (...ops) => (obs) => pipe(ops, ReadonlyArray_map(op => op(obs)), Observable_zipObservables);
export default Observable_forkZip;
