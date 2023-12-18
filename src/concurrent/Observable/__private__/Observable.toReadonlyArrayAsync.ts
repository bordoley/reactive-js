import { ObservableLike, SchedulerLike } from "../../../concurrent.js";
import { pipe, pipeAsync } from "../../../functions.js";
import {
  QueueableLike,
  QueueableLike_backpressureStrategy,
} from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import Observable_buffer from "./Observable.buffer.js";
import Observable_firstAsync from "./Observable.firstAsync.js";
import Observable_isRunnable from "./Observable.isRunnable.js";
import Observable_toReadonlyArray from "./Observable.toReadonlyArray.js";

const Observable_toReadonlyArrayAsync: Observable.Signature["toReadonlyArrayAsync"] =

    <T>(
      scheduler: SchedulerLike,
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
        const result = await pipeAsync(
          observable,
          Observable_buffer<T>(),
          Observable_firstAsync(scheduler, options),
        );

        return result ?? [];
      }
    };
export default Observable_toReadonlyArrayAsync;
