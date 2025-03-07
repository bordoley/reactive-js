import { invoke, isNone, pipe } from "../../../functions.js";
import { DisposableLike_dispose } from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import Observable_createPureSynchronousObservable from "./Observable.createPureSynchronousObservable.js";
import Observable_fromReadonlyArray from "./Observable.fromReadonlyArray.js";

const emptyObservable = /*@__PURE__*/ (() =>
  Observable_createPureSynchronousObservable(invoke(DisposableLike_dispose)))();

const Observable_empty: Observable.Signature["empty"] = ((options?: {
  delay: number;
}) =>
  isNone(options)
    ? emptyObservable
    : pipe(
        [],
        Observable_fromReadonlyArray({ ...options, delayStart: true }),
      )) as Observable.Signature["empty"];

export default Observable_empty;
