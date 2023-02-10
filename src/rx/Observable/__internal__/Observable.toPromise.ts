import { ToPromiseable } from "../../../containers";
import {
  Optional,
  error,
  isSome,
  newInstance,
  none,
  pipe,
} from "../../../functions";
import { ObservableLike } from "../../../rx";
import { SchedulerLike } from "../../../scheduling";
import Disposable_onDisposed from "../../../util/Disposable/__internal__/Disposable.onDisposed";
import Observable_forEach from "./Observable.forEach";
import Observable_subscribe from "./Observable.subscribe";

const Observable_toPromise: ToPromiseable<
  ObservableLike,
  SchedulerLike
>["toPromise"] =
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
        Observable_forEach<T>(next => {
          hasResult = true;
          result = next;
        }),
        Observable_subscribe(scheduler),
        Disposable_onDisposed(err => {
          if (isSome(err)) {
            reject(err);
          } else if (!hasResult) {
            reject(error("Observable completed without producing a value"));
          } else {
            resolve(result as T);
          }
        }),
      );
    });

export default Observable_toPromise;
