import Observable_map from "../../Observable/__internal__/Observable.map.js";
import type * as Runnable from "../../Runnable.js";
import { Function1, compose } from "../../functions.js";
import {
  QueueableLike,
  QueueableLike_backpressureStrategy,
  RunnableLike,
} from "../../types.js";
import Runnable_mergeAll from "./Runnable.mergeAll.js";

const Runnable_mergeMap: Runnable.Signature["mergeMap"] = <TA, TB>(
  selector: Function1<TA, RunnableLike<TB>>,
  options?: {
    readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    readonly capacity?: number;
    readonly concurrency?: number;
  },
) =>
  compose(
    Observable_map(selector) as Function1<
      RunnableLike<TA>,
      RunnableLike<RunnableLike<TB>>
    >,
    Runnable_mergeAll(options),
  );

export default Runnable_mergeMap;
