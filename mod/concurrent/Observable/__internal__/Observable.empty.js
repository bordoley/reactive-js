/// <reference types="./Observable.empty.d.ts" />

import { isNone, pipe } from "../../../functions.js";
import Observable_fromReadonlyArray from "./Observable.fromReadonlyArray.js";
const emptyObservable = /*@__PURE__*/ pipe([], Observable_fromReadonlyArray());
const Observable_empty = (options) => isNone(options)
    ? emptyObservable
    : pipe([], Observable_fromReadonlyArray({ ...options, delayStart: true }));
export default Observable_empty;
