import { ReadonlyArrayLike, ToReadonlyArray } from "../../../containers";
import {
  Factory,
  Function1,
  isSome,
  pipe,
  raiseError,
} from "../../../functions";
import { ObservableLike } from "../../../rx";
import { VirtualTimeSchedulerLike } from "../../../scheduling";
import Continuation_run from "../../../scheduling/__internal__/Continuation/Continuation.run";
import VirtualTimeScheduler_create from "../../../scheduling/__internal__/VirtualTimeScheduler/VirtualTimeScheduler.create";
import Disposable_getError from "../../../util/__internal__/Disposable/Disposable.getError";
import Observable_forEach from "./Observable.forEach";
import Observable_isRunnable from "./Observable.isRunnable";
import Observable_subscribe from "./Observable.subscribe";

const Observable_toReadonlyArray: ToReadonlyArray<ObservableLike>["toReadonlyArray"] =

    <T>(
      options: {
        readonly schedulerFactory?: Factory<VirtualTimeSchedulerLike>;
      } = {},
    ): Function1<ObservableLike<T>, ReadonlyArrayLike<T>> =>
    observable => {
      if (Observable_isRunnable(observable)) {
        const { schedulerFactory = VirtualTimeScheduler_create } = options;
        const scheduler = schedulerFactory();
        const result: T[] = [];

        const subscription = pipe(
          observable,
          Observable_forEach<T>(next => {
            result.push(next);
          }),
          Observable_subscribe(scheduler),
        );

        Continuation_run(scheduler);
        const error = Disposable_getError(subscription);

        return isSome(error) ? raiseError<T[]>(error) : result;
      } else {
        return [];
      }
    };

export default Observable_toReadonlyArray;
