import type * as EnumeratorFactory from "../../EnumeratorFactory.js";
import Runnable_flow from "../../Runnable/__internal__/Runnable.flow.js";
import { Function1, compose } from "../../functions.js";
import {
  DisposableLike,
  EnumeratorFactoryLike,
  PauseableObservableLike,
  QueueableLike,
  QueueableLike_backpressureStrategy,
  SchedulerLike,
} from "../../types.js";
import EnumeratorFactory_toObservable from "./EnumeratorFactory.toObservable.js";

const EnumeratorFactory_flow: EnumeratorFactory.Signature["flow"] = <T>(
  scheduler: SchedulerLike,
  options?: {
    readonly capacity?: number;
    readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    readonly delay?: number;
    readonly delayStart?: boolean;
    readonly start?: number;
    readonly count?: number;
  },
): Function1<
  EnumeratorFactoryLike<T>,
  PauseableObservableLike<T> & DisposableLike
> =>
  compose(
    EnumeratorFactory_toObservable(
      options as {
        readonly delay: number;
        readonly delayStart?: boolean;
        readonly count?: number;
        readonly start?: number;
      },
    ),
    Runnable_flow(scheduler, options),
  );

export default EnumeratorFactory_flow;
