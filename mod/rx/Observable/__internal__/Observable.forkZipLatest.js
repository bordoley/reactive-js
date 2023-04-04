/// <reference types="./Observable.forkZipLatest.d.ts" />

import { pipe } from "../../../functions.js";
import ReadonlyArray_map from "../../../keyed-containers/ReadonlyArray/__internal__/ReadonlyArray.map.js";
import Observable_latest from "./Observable.latest.js";
const Observable_forkZipLatest = ((...ops) => (obs) => Observable_latest(pipe(ops, ReadonlyArray_map(op => op(obs))), 2));
export default Observable_forkZipLatest;
