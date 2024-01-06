import {
  ObservableLike_isDeferred,
  ObservableLike_isMulticasted,
  ObservableLike_isPure,
  ObservableLike_isRunnable,
} from "../../../concurrent.js";
import { none } from "../../../functions.js";
import type * as Observable from "../../Observable.js";
import Observable_mergeAll from "./Observable.mergeAll.js";

const Observable_concatAll: Observable.Signature["concatAll"] = ((options?: {
  readonly innerType?: {
    readonly [ObservableLike_isDeferred]?: boolean;
    readonly [ObservableLike_isMulticasted]?: boolean;
    readonly [ObservableLike_isPure]?: boolean;
    readonly [ObservableLike_isRunnable]?: boolean;
  };
}) =>
  Observable_mergeAll({
    ...(options ?? {}),
    concurrency: 1,
    backpressureStrategy: none,
    capacity: none,
  })) as Observable.Signature["concatAll"];

export default Observable_concatAll;
