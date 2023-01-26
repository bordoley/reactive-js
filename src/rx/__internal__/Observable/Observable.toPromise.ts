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
import Disposable$onDisposed from "../../../util/__internal__/Disposable/Disposable.onDisposed";
import Observable$forEach from "./Observable.forEach";
import Observable$subscribe from "./Observable.subscribe";

const Observable$toPromise: ToPromiseable<
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
        Observable$forEach<T>(next => {
          hasResult = true;
          result = next;
        }),
        Observable$subscribe(scheduler),
        Disposable$onDisposed(err => {
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

export default Observable$toPromise;
