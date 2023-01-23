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
import DisposableLike__onDisposed from "../../../util/__internal__/DisposableLike/DisposableLike.onDisposed";
import ObservableLike__forEach from "./ObservableLike.forEach";
import ObservableLike__subscribe from "./ObservableLike.subscribe";

const ObservableLike__toPromise: ToPromiseable<
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
        ObservableLike__forEach<T>(next => {
          hasResult = true;
          result = next;
        }),
        ObservableLike__subscribe(scheduler),
        DisposableLike__onDisposed(err => {
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

export default ObservableLike__toPromise;
