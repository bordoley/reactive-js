import { ObservableLike } from "../../../computations.js";
import { isNone, isSome, pipeAsync } from "../../../functions.js";
import * as HostScheduler from "../../../utils/HostScheduler.js";
import { BackpressureStrategy, SchedulerLike } from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import Observable_buffer from "./Observable.buffer.js";
import Observable_firstAsync from "./Observable.firstAsync.js";

const Observable_toReadonlyArrayAsync: Observable.Signature["toReadonlyArrayAsync"] =
  <T>(
    schedulerOrOptions?:
      | SchedulerLike
      | {
          readonly capacity?: number;
          readonly backpressureStrategy?: BackpressureStrategy;
        },
    maybeOptions?: {
      readonly capacity?: number;
      readonly backpressureStrategy?: BackpressureStrategy;
    },
  ) => {
    const { scheduler, options } =
      isNone(schedulerOrOptions) || isSome((schedulerOrOptions as any).capacity)
        ? {
            // FIXME: Might want to create a scheduler and use it instead
            scheduler: HostScheduler.get(),
            options: schedulerOrOptions as {
              readonly capacity?: number;
              readonly backpressureStrategy?: BackpressureStrategy;
            },
          }
        : {
            scheduler: schedulerOrOptions as SchedulerLike,
            options: maybeOptions,
          };

    return async (observable: ObservableLike<T>): Promise<ReadonlyArray<T>> => {
      const result = await pipeAsync(
        observable,
        Observable_buffer<T>(),
        Observable_firstAsync(scheduler, options),
      );

      return result ?? [];
    };
  };
export default Observable_toReadonlyArrayAsync;
