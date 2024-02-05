import { Promise } from "../../../__internal__/constants.js";
import { ObservableLike, SchedulerLike } from "../../../concurrent.js";
import { Optional, newInstance, none, pipe } from "../../../functions.js";
import { BackpressureStrategy } from "../../../utils.js";
import * as Disposable from "../../../utils/Disposable.js";
import type * as Observable from "../../Observable.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_subscribe from "./Observable.subscribe.js";

const Observable_lastAsync: Observable.Signature["lastAsync"] =
  <T>(
    scheduler: SchedulerLike,
    options?: {
      readonly capacity?: number;
      readonly backpressureStrategy?: BackpressureStrategy;
    },
  ) =>
  async (observable: ObservableLike<T>) => {
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
  };

export default Observable_lastAsync;
