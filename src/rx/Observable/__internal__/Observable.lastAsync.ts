import {
  Optional,
  isNone,
  isSome,
  newInstance,
  none,
  pipe,
} from "../../../functions.js";
import { ObservableLike } from "../../../rx.js";
import { SchedulerLike } from "../../../scheduling.js";
import Scheduler_createHostScheduler from "../../../scheduling/Scheduler/__internal__/Scheduler.createHostScheduler.js";
import { DisposableLike_dispose } from "../../../util.js";
import Disposable_onDisposed from "../../../util/Disposable/__internal__/Disposable.onDisposed.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_subscribe from "./Observable.subscribe.js";

const Observable_lastAsync =
  <T>(options?: { scheduler?: SchedulerLike; maxBufferSize?: number }) =>
  async (observable: ObservableLike<T>): Promise<Optional<T>> => {
    const { scheduler: schedulerOption } = options ?? {};

    const scheduler = schedulerOption ?? Scheduler_createHostScheduler();

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
          Disposable_onDisposed(err => {
            if (isSome(err)) {
              reject(err);
            } else {
              resolve(result as T);
            }
          }),
        );
      });
    } finally {
      if (isNone(schedulerOption)) {
        scheduler[DisposableLike_dispose]();
      }
    }
  };

export default Observable_lastAsync;
