import {
  RunnableLike,
  RunnableWithSideEffectsLike,
  SchedulerLike,
} from "../../../concurrent.js";
import { returns } from "../../../functions.js";
import {
  QueueableLike,
  QueueableLike_backpressureStrategy,
} from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import Observable_createPauseable from "./Observable.createPauseable.js";

const Observable_flow: Observable.Signature["flow"] =
  <T>(
    scheduler: SchedulerLike,
    options?: {
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
      readonly capacity?: number;
    },
  ) =>
  (runnable: RunnableLike<T> | RunnableWithSideEffectsLike<T>) => {
    return Observable_createPauseable<T>(returns(runnable), scheduler, options);
  };
export default Observable_flow;
