import Observable_delay from "../../Observable/__internal__/Observable.delay.js";
import Observable_flow from "../../Observable/__internal__/Observable.flow.js";
import type * as ReadonlyArray from "../../ReadonlyArray.js";
import { Function1, compose, identity } from "../../functions.js";
import {
  DisposableLike,
  PauseableObservableLike,
  QueueableLike,
  QueueableLike_backpressureStrategy,
  RunnableBaseLike,
  SchedulerLike,
} from "../../types.js";
import ReadonlyArray_toObservable from "./ReadonlyArray.toObservable.js";

const ReadonlyArray_flow: ReadonlyArray.Signature["flow"] = <T>(
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
    ReadonlyArray_toObservable(
      options as {
        readonly count: number;
        readonly start?: number;
      },
    ),
    ((options?.delay ?? 0) > 0
      ? Observable_delay<T>(options?.delay ?? 0)
      : identity) as Function1<RunnableBaseLike<T>, RunnableBaseLike<T>>,

    Observable_flow(scheduler, options),
  );

export default ReadonlyArray_flow;
