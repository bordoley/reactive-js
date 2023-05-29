import type * as Observable from "../../Observable.js";
import Observable_toReadonlyArray from "../../Observable/__internal__/Observable.toReadonlyArray.js";
import { pipe, pipeAsync } from "../../functions.js";
import {
  ObservableLike,
  QueueableLike,
  QueueableLike_backpressureStrategy,
  SchedulerLike,
} from "../../types.js";
import Observable_buffer from "./Observable.buffer.js";
import Observable_firstAsync from "./Observable.firstAsync.js";
import Observable_isRunnable from "./Observable.isRunnable.js";

const Observable_toReadonlyArrayAsync: Observable.Signature["toReadonlyArrayAsync"] =

    <T>(
      schedulerOrNone?: SchedulerLike,
      options?: {
        readonly capacity?: number;
        readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
      },
    ) =>
    async (observable: ObservableLike<T>): Promise<ReadonlyArray<T>> => {
      if (Observable_isRunnable(observable)) {
        // Add a microtask queue hop, so that the evaluation occurs asynchronously.
        await Promise.resolve();
        return pipe(observable, Observable_toReadonlyArray());
      } else {
        return await pipeAsync(
          observable,
          Observable_buffer<T>(),
          Observable_firstAsync(schedulerOrNone as SchedulerLike, options),
          x => x ?? [],
        );
      }
    };
export default Observable_toReadonlyArrayAsync;
