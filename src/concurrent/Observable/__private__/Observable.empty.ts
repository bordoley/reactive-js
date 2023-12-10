import { isNone, pipe } from "../../../functions.js";
import type * as Observable from "../../Observable.js";
import Observable_fromReadonlyArray from "./Observable.fromReadonlyArray.js";

const emptyObservable = /*@__PURE__*/ pipe([], Observable_fromReadonlyArray());

const Observable_empty: Observable.Signature["empty"] = (options?: {
  delay: number;
}) =>
  isNone(options)
    ? emptyObservable
    : pipe([], Observable_fromReadonlyArray({ ...options, delayStart: true }));

export default Observable_empty;
