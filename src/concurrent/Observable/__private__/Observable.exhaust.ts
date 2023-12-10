import {
  ObservableLike_isDeferred,
  ObservableLike_isPure,
  ObservableLike_isRunnable,
} from "../../../concurrent.js";
import type * as Observable from "../../Observable.js";
import Observable_mergeAll from "./Observable.mergeAll.js";

const Observable_exhaust: Observable.Signature["exhaust"] = ((options?: {
  readonly [ObservableLike_isDeferred]?: boolean;
  readonly [ObservableLike_isPure]?: boolean;
  readonly [ObservableLike_isRunnable]?: boolean;
}) =>
  Observable_mergeAll({
    ...(options ?? {}),
    capacity: 0,
    backpressureStrategy: "drop-latest",
    concurrency: 1,
  })) as Observable.Signature["exhaust"];

export default Observable_exhaust;
