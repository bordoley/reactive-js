import Observable_map from "../../Observable/__internal__/Observable.map.js";
import type * as Runnable from "../../Runnable.js";
import { Function1, pipe } from "../../functions.js";
import {
  QueueableLike,
  QueueableLike_backpressureStrategy,
  RunnableLike,
} from "../../types.js";
import Runnable_mergeAll from "./Runnable.mergeAll.js";

const Runnable_mergeMap: Runnable.Signature["mergeMap"] = (<TA, TB>(
    selector: Function1<TA, RunnableLike<TB>>,
    options?: {
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
      readonly capacity?: number;
      readonly concurrency?: number;
    },
  ) =>
  (obs: RunnableLike<TA>) =>
    pipe(
      obs,
      Observable_map(selector),
      Runnable_mergeAll<TB>(options),
    )) as Runnable.Signature["mergeMap"];

export default Runnable_mergeMap;
