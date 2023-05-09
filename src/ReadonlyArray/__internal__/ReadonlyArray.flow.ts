import Runnable_flow from "../../Runnable/__internal__/Runnable.flow.js";
import { Function1, compose } from "../../functions.js";
import {
  DisposableLike,
  PauseableObservableLike,
  QueueableLike,
  QueueableLike_backpressureStrategy,
  SchedulerLike,
} from "../../types.js";
import ReadonlyArray_toObservable from "./ReadonlyArray.toObservable.js";

const ReadonlyArray_toFlowable = <T>(
  scheduler: SchedulerLike,
  options?: {
    readonly capacity?: number;
    readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    readonly delay?: number;
    readonly delayStart?: boolean;
    readonly start?: number;
    readonly count?: number;
  },
): Function1<ReadonlyArray<T>, PauseableObservableLike<T> & DisposableLike> =>
  compose(
    ReadonlyArray_toObservable(options),
    Runnable_flow(scheduler, options),
  );

export default ReadonlyArray_toFlowable;
