import { IterableLike } from "../../../containers.js";
import { compose } from "../../../functions.js";
import { ToInteractiveObservable } from "../../../rx.js";
import Enumerable_toInteractiveObservable from "../../../rx/Enumerable/__internal__/Enumerable.toInteractiveObservable.js";
import { SchedulerLike } from "../../../scheduling.js";
import {
  QueueableLike,
  QueueableLike_backpressureStrategy,
} from "../../../util.js";
import Iterable_toObservable from "./Iterable.toObservable.js";

const Iterable_toInteractiveObservable: ToInteractiveObservable<
  IterableLike,
  { readonly delay?: number }
>["toInteractiveObservable"] = <T>(
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
    Enumerable_toInteractiveObservable(scheduler, options),
  );

export default Iterable_toInteractiveObservable;
