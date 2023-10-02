import { ObservableLike, SchedulerLike } from "../../../concurrent.js";
import {
  Optional,
  isFunction,
  isNone,
  newInstance,
  none,
  pipe,
} from "../../../functions.js";
import {
  DisposableLike_dispose,
  QueueableLike,
  QueueableLike_backpressureStrategy,
} from "../../../utils.js";
import * as Disposable from "../../../utils/Disposable.js";
import type * as Observable from "../../Observable.js";
import Scheduler_createHostScheduler from "../../Scheduler/__internal__/Scheduler.createHostScheduler.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_subscribe from "./Observable.subscribe.js";

const Observable_lastAsync: Observable.Signature["lastAsync"] =
  <T>(
    schedulerOrNone?: SchedulerLike,
    options?: {
      readonly capacity?: number;
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    },
  ) =>
  async (observable: ObservableLike<T>) => {
    const schedulerOrFactory = isNone(schedulerOrNone)
      ? Scheduler_createHostScheduler
      : none;
    const isSchedulerFactory = isFunction(schedulerOrFactory);
    const schedulerDisposable = isSchedulerFactory
      ? schedulerOrFactory()
      : none;
    const scheduler = schedulerDisposable ?? (schedulerOrNone as SchedulerLike);

    try {
      return await newInstance<
        Promise<T>,
        (
          resolve: (value: T | PromiseLike<T>) => void,
          reject: (ex: unknown) => void,
        ) => void
      >(Promise, (resolve, reject) => {
        let result: Optional<T> = none;

        pipe(
          observable,
          Observable_forEach((next: T) => {
            result = next;
          }),
          Observable_subscribe(scheduler, options),
          Disposable.onError(reject),
          Disposable.onComplete(() => {
            resolve(result as T);
          }),
        );
      });
    } finally {
      schedulerDisposable?.[DisposableLike_dispose]();
    }
  };

export default Observable_lastAsync;
