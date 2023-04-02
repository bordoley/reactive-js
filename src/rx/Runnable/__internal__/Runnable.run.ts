import { __DEV__ } from "../../../__internal__/constants.js";
import {
  isSome,
  pipe,
  raiseError,
  raiseWithDebugMessage,
} from "../../../functions.js";
import { ObservableLike_isRunnable, RunnableLike } from "../../../rx.js";
import { VirtualTimeSchedulerLike_run } from "../../../scheduling.js";
import Scheduler_createVirtualTimeScheduler from "../../../scheduling/Scheduler/__internal__/Scheduler.createVirtualTimeScheduler.js";
import {
  DisposableLike_error,
  QueueableLike,
  QueueableLike_backpressureStrategy,
} from "../../../util.js";
import Observable_subscribe from "../../Observable/__internal__/Observable.subscribe.js";

const Runnable_run =
  <T>(options?: {
    readonly backpressureStrategy: QueueableLike[typeof QueueableLike_backpressureStrategy];
    readonly capacity?: number;
  }) =>
  (observable: RunnableLike<T>) => {
    if (__DEV__ && !observable[ObservableLike_isRunnable]) {
      raiseWithDebugMessage(
        "Runnable.run() invoked with a non-runnable ObservableLike",
      );
    }

    const scheduler = Scheduler_createVirtualTimeScheduler();

    const subscription = pipe(
      observable,
      Observable_subscribe(scheduler, options),
    );

    scheduler[VirtualTimeSchedulerLike_run]();
    const error = subscription[DisposableLike_error];

    if (isSome(error)) {
      raiseError<T[]>(error);
    }
  };

export default Runnable_run;
