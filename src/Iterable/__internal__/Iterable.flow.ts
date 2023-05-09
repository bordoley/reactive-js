import Runnable_flow from "../../Runnable/__internal__/Runnable.flow.js";
import { Function1, compose } from "../../functions.js";
import {
  DisposableLike,
  PauseableObservableLike,
  QueueableLike,
  QueueableLike_backpressureStrategy,
  SchedulerLike,
} from "../../types.js";
import Iterable_toObservable from "./Iterable.toObservable.js";

const Iterable_flow = <T>(
  scheduler: SchedulerLike,
  options?: {
    readonly capacity?: number;
    readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    readonly delay?: number;
    readonly delayStart?: boolean;
  },
): Function1<Iterable<T>, PauseableObservableLike<T> & DisposableLike> =>
  compose(Iterable_toObservable(options), Runnable_flow(scheduler, options));

export default Iterable_flow;
