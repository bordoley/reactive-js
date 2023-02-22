/// <reference types="./Observable.forkZipLatest.d.ts" />

import ReadonlyArray_map from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.map.js";
import { pipe } from "../../../functions.js";
import Observable_latest from "./Observable.latest.js";
const Observable_forkZipLatest = ((...ops) => (obs) => Observable_latest(pipe(ops, ReadonlyArray_map(op => pipe(obs, op))), 2));
export default Observable_forkZipLatest;
