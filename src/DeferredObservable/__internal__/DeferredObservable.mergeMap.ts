import type * as DeferredObservable from "../../DeferredObservable.js";
import Observable_map from "../../Observable/__internal__/Observable.map.js";
import { Function1, compose } from "../../functions.js";
import {
  DeferredObservableLike,
  QueueableLike,
  QueueableLike_backpressureStrategy,
} from "../../types.js";
import DeferredObservable_mergeAll from "./DeferredObservable.mergeAll.js";

const DeferredObservable_mergeMap: DeferredObservable.Signature["mergeMap"] = <
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
      DeferredObservableLike<TA>,
      DeferredObservableLike<DeferredObservableLike<TB>>
    >,
    DeferredObservable_mergeAll(options),
  );

export default DeferredObservable_mergeMap;
