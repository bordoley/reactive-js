import { ReadonlyArrayLike } from "../../../containers.js";
import { pipe } from "../../../functions.js";
import { EnumerateAsync } from "../../../rx.js";
import Enumerable_enumerateAsync from "../../../rx/Enumerable/__internal__/Enumerable.enumerateAsync.js";
import { SchedulerLike } from "../../../scheduling.js";
import {
  QueueableLike,
  QueueableLike_backpressureStrategy,
} from "../../../util.js";
import ReadonlyArray_toObservable from "./ReadonlyArray.toObservable.js";

const ReadonlyArray_enumerateAsync: EnumerateAsync<
  ReadonlyArrayLike,
  {
    readonly delay?: number;
    readonly start?: number;
    readonly count?: number;
  }
>["enumerateAsync"] =
  <T>(
    scheduler: SchedulerLike,
    options?: {
      readonly replay?: number;
      readonly capacity?: number;
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
      readonly delay?: number;
      readonly start?: number;
      readonly count?: number;
    },
  ) =>
  (array: ReadonlyArrayLike<T>) =>
    pipe(
      array,
      ReadonlyArray_toObservable<T>(
        options as {
          readonly count: number;
          readonly start: number;
        },
      ),
      Enumerable_enumerateAsync(scheduler, options),
    );

export default ReadonlyArray_enumerateAsync;
