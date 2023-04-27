import { IterableLike } from "../../../containers.js";
import { Function1, compose } from "../../../functions.js";
import { PauseableObservableLike } from "../../../rx.js";
import Runnable_flow from "../../../rx/Runnable/__internal__/Runnable.flow.js";
import { SchedulerLike } from "../../../scheduling.js";
import {
  DisposableLike,
  QueueableLike,
  QueueableLike_backpressureStrategy,
} from "../../../util.js";
import Iterable_toObservable from "./Iterable.toObservable.js";

const Iterable_flow = <T>(
  scheduler: SchedulerLike,
  options?: {
    readonly capacity?: number;
    readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    readonly delay?: number;
    readonly delayStart?: boolean;
  },
): Function1<IterableLike<T>, PauseableObservableLike<T> & DisposableLike> =>
  compose(Iterable_toObservable(options), Runnable_flow(scheduler, options));

export default Iterable_flow;
