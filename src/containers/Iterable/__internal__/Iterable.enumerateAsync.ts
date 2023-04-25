import { IterableLike } from "../../../containers.js";
import { compose } from "../../../functions.js";
import { EnumerateAsync } from "../../../rx.js";
import Enumerable_enumerateAsync from "../../../rx/Enumerable/__internal__/Enumerable.enumerateAsync.js";
import { SchedulerLike } from "../../../scheduling.js";
import {
  QueueableLike,
  QueueableLike_backpressureStrategy,
} from "../../../util.js";
import Iterable_toObservable from "./Iterable.toObservable.js";

const Iterable_enumerateAsync: EnumerateAsync<
  IterableLike,
  { readonly delay?: number }
>["enumerateAsync"] = <T>(
  scheduler: SchedulerLike,
  options?: {
    readonly replay?: number;
    readonly capacity?: number;
    readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    readonly delay?: number;
  },
) =>
  compose(
    Iterable_toObservable<T>(),
    Enumerable_enumerateAsync(scheduler, options),
  );

export default Iterable_enumerateAsync;
