import {
  ComputationLike_isPure,
  ComputationLike_isSynchronous,
} from "../../../computations.js";
import { ObservableLike_isDeferred } from "../../../concurrent.js";
import { none } from "../../../functions.js";
import type * as Observable from "../../Observable.js";
import Observable_mergeAll from "./Observable.mergeAll.js";

const Observable_concatAll: Observable.Signature["concatAll"] = ((options?: {
  readonly innerType?: {
    readonly [ObservableLike_isDeferred]?: boolean;
    readonly [ComputationLike_isPure]?: boolean;
    readonly [ComputationLike_isSynchronous]?: boolean;
  };
}) =>
  Observable_mergeAll({
    ...(options ?? {}),
    concurrency: 1,
    backpressureStrategy: none,
    capacity: none,
  })) as Observable.Signature["concatAll"];

export default Observable_concatAll;
