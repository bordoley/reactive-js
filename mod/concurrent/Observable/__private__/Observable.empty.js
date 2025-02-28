/// <reference types="./Observable.empty.d.ts" />

import { invoke, isNone, pipe } from "../../../functions.js";
import { DisposableLike_dispose } from "../../../utils.js";
import Observable_createPureSynchronousObservable from "./Observable.createPureSynchronousObservable.js";
import Observable_fromReadonlyArray from "./Observable.fromReadonlyArray.js";
const emptyObservable = /*@__PURE__*/ (() => Observable_createPureSynchronousObservable(invoke(DisposableLike_dispose)))();
const Observable_empty = ((options) => isNone(options)
    ? emptyObservable
    : pipe([], Observable_fromReadonlyArray({ ...options, delayStart: true })));
export default Observable_empty;
