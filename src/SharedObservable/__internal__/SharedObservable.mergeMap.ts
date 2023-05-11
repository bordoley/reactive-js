import Observable_map from "../../Observable/__internal__/Observable.map.js";
import type * as SharedObservable from "../../SharedObservable.js";
import { Function1, compose } from "../../functions.js";
import {
  DeferredObservableLike,
  QueueableLike,
  QueueableLike_backpressureStrategy,
  SharedObservableLike,
} from "../../types.js";
import SharedObservable_mergeAll from "./SharedObservable.mergeAll.js";

const SharedObservable_mergeMap: SharedObservable.Signature["mergeMap"] = <
  TA,
  TB,
>(
  selector: Function1<TA, DeferredObservableLike<TB>>,
  options?: {
    readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    readonly capacity?: number;
    readonly concurrency?: number;
  },
) =>
  compose(
    Observable_map(selector) as Function1<
      SharedObservableLike<TA>,
      SharedObservableLike<DeferredObservableLike<TB>>
    >,
    SharedObservable_mergeAll(options),
  );

export default SharedObservable_mergeMap;
