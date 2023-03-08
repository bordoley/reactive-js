import {
  Optional,
  isSome,
  newInstance,
  none,
  pipe,
} from "../../../functions.js";
import { ObservableLike } from "../../../rx.js";
import { SchedulerLike } from "../../../scheduling.js";
import Disposable_onDisposed from "../../../util/Disposable/__internal__/Disposable.onDisposed.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_subscribe from "./Observable.subscribe.js";

const Observable_lastAsync =
  <T>(scheduler: SchedulerLike) =>
  (observable: ObservableLike<T>): PromiseLike<Optional<T>> =>
    newInstance<
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
        Observable_subscribe(scheduler),
        Disposable_onDisposed(err => {
          if (isSome(err)) {
            reject(err);
          } else {
            resolve(result as T);
          }
        }),
      );
    });

export default Observable_lastAsync;
