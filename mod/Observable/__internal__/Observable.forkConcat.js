/// <reference types="./Observable.forkConcat.d.ts" />

import Observable_concatMany from "../../Observable/__internal__/Observable.concatMany.js";
import ReadonlyArray_map from "../../ReadonlyArray/__internal__/ReadonlyArray.map.js";
import { pipe } from "../../functions.js";
const Observable_forkConcat = ((...ops) => (obs) => Observable_concatMany(pipe(ops, ReadonlyArray_map(op => op(obs)))));
export default Observable_forkConcat;
