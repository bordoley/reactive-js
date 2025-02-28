import {
  ComputationLike_isPure,
  ComputationLike_isSynchronous,
} from "../../../computations.js";
import { ObservableLike_isDeferred } from "../../../concurrent.js";
import { DropLatestBackpressureStrategy } from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import Observable_mergeAll from "./Observable.mergeAll.js";

const Observable_exhaust: Observable.Signature["exhaust"] = ((options?: {
  readonly innerType?: {
    readonly [ObservableLike_isDeferred]: boolean;
    readonly [ComputationLike_isPure]: boolean;
    readonly [ComputationLike_isSynchronous]: boolean;
  };
}) =>
  Observable_mergeAll({
    ...(options ?? {}),
    capacity: 0,
    backpressureStrategy: DropLatestBackpressureStrategy,
    concurrency: 1,
  })) as Observable.Signature["exhaust"];

export default Observable_exhaust;
