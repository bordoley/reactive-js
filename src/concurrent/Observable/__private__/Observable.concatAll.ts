import { DeferringHigherOrderInnerType } from "../../../computations.js";
import { none } from "../../../functions.js";
import type * as Observable from "../../Observable.js";
import Observable_mergeAll from "./Observable.mergeAll.js";

const Observable_concatAll: Observable.Signature["concatAll"] = ((options?: {
  readonly innerType?: DeferringHigherOrderInnerType;
}) =>
  Observable_mergeAll({
    ...(options ?? {}),
    concurrency: 1,
    backpressureStrategy: none,
    capacity: none,
  })) as Observable.Signature["concatAll"];

export default Observable_concatAll;
