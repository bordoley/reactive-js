import {
  Factory,
  Optional,
  isFunction,
  newInstance,
  none,
  pipe,
} from "../../../functions.js";
import { ObservableLike } from "../../../rx.js";
import { SchedulerLike } from "../../../scheduling.js";
import Scheduler_createHostScheduler from "../../../scheduling/Scheduler/__internal__/Scheduler.createHostScheduler.js";
import {
  DisposableLike,
  DisposableLike_dispose,
  QueueableLike,
  QueueableLike_backpressureStrategy,
} from "../../../util.js";
import Disposable_onComplete from "../../../util/Disposable/__internal__/Disposable.onComplete.js";
import Disposable_onError from "../../../util/Disposable/__internal__/Disposable.onError.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_subscribe from "./Observable.subscribe.js";

const Observable_lastAsync =
  <T>(options?: {
    readonly scheduler?:
      | SchedulerLike
      | Factory<SchedulerLike & DisposableLike>;
    readonly capacity?: number;
    readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
  }) =>
  async (observable: ObservableLike<T>): Promise<Optional<T>> => {
    const schedulerOrFactory =
      options?.scheduler ?? Scheduler_createHostScheduler;
    const isSchedulerFactory = isFunction(schedulerOrFactory);
    const schedulerDisposable = isSchedulerFactory
      ? schedulerOrFactory()
      : none;
    const scheduler =
      schedulerDisposable ?? (schedulerOrFactory as SchedulerLike);

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
          Observable_forEach<ObservableLike, T>(next => {
            result = next;
          }),
          Observable_subscribe(scheduler, options),
          Disposable_onError(reject),
          Disposable_onComplete(() => {
            resolve(result as T);
          }),
        );
      });
    } finally {
      schedulerDisposable?.[DisposableLike_dispose]();
    }
  };

export default Observable_lastAsync;
