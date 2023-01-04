import { ToPromiseable } from "../../../containers";
import { Optional, isSome, newInstance, none, pipe } from "../../../functions";
import { ObservableLike } from "../../../rx";
import { SchedulerLike } from "../../../scheduling";
import { onDisposed } from "../../../util/DisposableLike";
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
        onDisposed(err => {
          if (isSome(err)) {
            const { cause } = err;
            reject(cause);
          } else if (!hasResult) {
            reject(
              newInstance(
                Error,
                "Observable completed without producing a value",
              ),
            );
          } else {
            resolve(result as T);
          }
        }),
      );
    });

export default ObservableLike__toPromise;
