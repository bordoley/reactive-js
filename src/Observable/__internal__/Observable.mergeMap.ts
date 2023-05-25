import type * as Observable from "../../Observable.js";
import { Function1, pipe } from "../../functions.js";
import {
  DeferredObservableBaseLike,
  ObservableLike,
  QueueableLike,
  QueueableLike_backpressureStrategy,
} from "../../types.js";
import Observable_map from "./Observable.map.js";
import Observable_mergeAll from "./Observable.mergeAll.js";

const Observable_mergeMap: Observable.Signature["mergeMap"] = (<TA, TB>(
    selector: Function1<TA, DeferredObservableBaseLike<TB>>,
    options?: {
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
      readonly capacity?: number;
      readonly concurrency?: number;
    },
  ) =>
  (obs: ObservableLike<TA>) =>
    pipe(
      obs,
      Observable_map(selector),
      Observable_mergeAll<TB>(options),
    )) as Observable.Signature["mergeMap"];

export default Observable_mergeMap;
