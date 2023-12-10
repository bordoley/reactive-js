import { DeferredObservableLike, ObservableLike } from "../../../concurrent.js";
import { Function1, pipe } from "../../../functions.js";
import {
  QueueableLike,
  QueueableLike_backpressureStrategy,
} from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import Observable_map from "./Observable.map.js";
import Observable_mergeAll from "./Observable.mergeAll.js";

const Observable_mergeMap: Observable.Signature["mergeMap"] = (<TA, TB>(
    selector: Function1<TA, DeferredObservableLike<TB>>,
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
