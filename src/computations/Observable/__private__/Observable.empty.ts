import { invoke, isNone, pipe } from "../../../functions.js";
import { SinkLike_complete } from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import Observable_createPureSynchronousObservable from "./Observable.createPureSynchronousObservable.js";
import Observable_fromReadonlyArray from "./Observable.fromReadonlyArray.js";

const emptyObservable = /*@__PURE__*/ (() =>
  Observable_createPureSynchronousObservable(invoke(SinkLike_complete)))();

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
