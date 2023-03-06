import {
  Optional,
  errorWithWithDebugMessage,
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

const Observable_toPromise =
  <T>(scheduler: SchedulerLike) =>
  (observable: ObservableLike<T>): PromiseLike<T> =>
    newInstance<
      Promise<T>,
      (
        resolve: (value: T | PromiseLike<T>) => void,
        reject: (ex: unknown) => void,
      ) => void
    >(Promise, (resolve, reject) => {
      let result: Optional<T> = none;
      let hasResult = false;

      pipe(
        observable,
        Observable_forEach<ObservableLike, T>(next => {
          hasResult = true;
          result = next;
        }),
        Observable_subscribe(scheduler),
        Disposable_onDisposed(err => {
          if (isSome(err)) {
            reject(err);
          } else if (!hasResult) {
            reject(
              errorWithWithDebugMessage(
                "Observable completed without producing a value",
              ),
            );
          } else {
            resolve(result as T);
          }
        }),
      );
    });

export default Observable_toPromise;
