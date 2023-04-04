/// <reference types="./Observable.forkConcat.d.ts" />

import { pipe } from "../../../functions.js";
import ReadonlyArray_map from "../../../keyed-containers/ReadonlyArray/__internal__/ReadonlyArray.map.js";
import Observable_concatObservables from "./Observable.concatObservables.js";
const Observable_forkConcat = (...ops) => (obs) => pipe(ops, ReadonlyArray_map(op => op(obs)), Observable_concatObservables);
export default Observable_forkConcat;
