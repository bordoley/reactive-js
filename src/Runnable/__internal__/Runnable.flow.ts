import PauseableObservable_create from "../../PauseableObservable/__internal__/PauseableObservable.create.js";
import type * as Runnable from "../../Runnable.js";
import { returns } from "../../functions.js";
import {
  QueueableLike,
  QueueableLike_backpressureStrategy,
  RunnableLike,
  SchedulerLike,
} from "../../types.js";

const Runnable_flow: Runnable.Signature["flow"] =
  <T>(
    scheduler: SchedulerLike,
    options?: {
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
      readonly capacity?: number;
    },
  ) =>
  (runnable: RunnableLike<T>) => {
    return PauseableObservable_create<T>(returns(runnable), scheduler, options);
  };
export default Runnable_flow;
