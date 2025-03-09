import { Promise } from "../../../__internal__/constants.js";
import { ObservableLike } from "../../../computations.js";
import {
  Factory,
  Reducer,
  isNone,
  isSome,
  newInstance,
  pipe,
} from "../../../functions.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import * as HostScheduler from "../../../utils/HostScheduler.js";
import { BackpressureStrategy, SchedulerLike } from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_subscribe from "./Observable.subscribe.js";

const Observable_reduceAsync: Observable.Signature["reduceAsync"] = (<T, TAcc>(
    reducer: Reducer<T, TAcc>,
    initialValue: Factory<TAcc>,
    schedulerOrOptions: SchedulerLike,
    maybeOptions?: {
      readonly capacity?: number;
      readonly backpressureStrategy?: BackpressureStrategy;
    },
  ) =>
  async (observable: ObservableLike<T>) => {
    const { scheduler, options } =
      isNone(schedulerOrOptions) || isSome((schedulerOrOptions as any).capacity)
        ? {
            scheduler: HostScheduler.get(),
            options: schedulerOrOptions as {
              readonly capacity?: number;
              readonly backpressureStrategy?: BackpressureStrategy;
            },
          }
        : {
            scheduler: schedulerOrOptions as SchedulerLike,
            options: maybeOptions,
          };

    return await newInstance<
      Promise<TAcc>,
      (
        resolve: (value: TAcc | PromiseLike<TAcc>) => void,
        reject: (ex: unknown) => void,
      ) => void
    >(Promise<TAcc>, (resolve, reject) => {
      let acc = initialValue();

      pipe(
        observable,
        Observable_forEach((next: T) => {
          acc = reducer(acc, next);
        }),
        Observable_subscribe(scheduler, options),
        DisposableContainer.onError(reject),
        DisposableContainer.onComplete(() => {
          resolve(acc as TAcc);
        }),
      );
    });
  }) as Observable.Signature["reduceAsync"];

export default Observable_reduceAsync;
