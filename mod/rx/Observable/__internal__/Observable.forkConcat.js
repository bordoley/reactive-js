/// <reference types="./Observable.forkConcat.d.ts" />

import ReadonlyArray_map from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.map.js";
import { pipe } from "../../../functions.js";
import Observable_concatObservables from "./Observable.concatObservables.js";
const Observable_forkConcat = (...ops) => (obs) => pipe(ops, ReadonlyArray_map(op => op(obs)), Observable_concatObservables);
export default Observable_forkConcat;
