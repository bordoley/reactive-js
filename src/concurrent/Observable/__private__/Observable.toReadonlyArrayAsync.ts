import { ObservableLike, SchedulerLike } from "../../../concurrent.js";
import { pipeAsync } from "../../../functions.js";
import { BackpressureStrategy } from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import Observable_buffer from "./Observable.buffer.js";
import Observable_firstAsync from "./Observable.firstAsync.js";

const Observable_toReadonlyArrayAsync: Observable.Signature["toReadonlyArrayAsync"] =

    <T>(
      scheduler: SchedulerLike,
      options?: {
        readonly capacity?: number;
        readonly backpressureStrategy?: BackpressureStrategy;
      },
    ) =>
    async (observable: ObservableLike<T>): Promise<ReadonlyArray<T>> => {
      const result = await pipeAsync(
        observable,
        Observable_buffer<T>(),
        Observable_firstAsync(scheduler, options),
      );

      return result ?? [];
    };
export default Observable_toReadonlyArrayAsync;
