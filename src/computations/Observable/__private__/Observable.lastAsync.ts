import { Promise } from "../../../__internal__/constants.js";
import { ObservableLike } from "../../../computations.js";
import { Optional, newInstance, none, pipe } from "../../../functions.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import * as HostScheduler from "../../../utils/HostScheduler.js";
import { BackpressureStrategy, SchedulerLike } from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_subscribe from "./Observable.subscribe.js";

const Observable_lastAsync: Observable.Signature["lastAsync"] =
  <T>(options?: {
    readonly scheduler?: SchedulerLike;
    readonly capacity?: number;
    readonly backpressureStrategy?: BackpressureStrategy;
  }) =>
  async (observable: ObservableLike<T>) => {
    const { scheduler } = options ?? {};

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
        Observable_subscribe(scheduler ?? HostScheduler.get(), options),
        DisposableContainer.onError(reject),
        DisposableContainer.onComplete(() => {
          resolve(result as T);
        }),
      );
    });
  };

export default Observable_lastAsync;
