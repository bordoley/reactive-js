/// <reference types="./Observable.forkCombineLatest.d.ts" />

import { pipe } from "../../../functions.js";
import ReadonlyArray_map from "../../../keyedcontainers/ReadonlyArray/__internal__/ReadonlyArray.map.js";
import Observable_latest from "./Observable.latest.js";
const Observable_forkCombineLatest = ((...ops) => (obs) => Observable_latest(pipe(ops, ReadonlyArray_map(op => op(obs))), 1));
export default Observable_forkCombineLatest;
