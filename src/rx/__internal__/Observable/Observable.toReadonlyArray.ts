import { ReadonlyArrayLike, ToReadonlyArray } from "../../../containers";
import { Factory, Function1, isSome, pipe, raise } from "../../../functions";
import { ObservableLike } from "../../../rx";
import { VirtualTimeSchedulerLike } from "../../../scheduling";
import Continuation$run from "../../../scheduling/__internal__/Continuation/Continuation.run";
import VirtualTimeScheduler$create from "../../../scheduling/__internal__/VirtualTimeScheduler/VirtualTimeScheduler.create";
import Disposable$getError from "../../../util/__internal__/Disposable/Disposable.getError";
import Observable$forEach from "./Observable.forEach";
import Observable$isRunnable from "./Observable.isRunnable";
import Observable$subscribe from "./Observable.subscribe";

const Observable$toReadonlyArray: ToReadonlyArray<ObservableLike>["toReadonlyArray"] =

    <T>(
      options: {
        readonly schedulerFactory?: Factory<VirtualTimeSchedulerLike>;
      } = {},
    ): Function1<ObservableLike<T>, ReadonlyArrayLike<T>> =>
    observable => {
      if (Observable$isRunnable(observable)) {
        const { schedulerFactory = VirtualTimeScheduler$create } = options;
        const scheduler = schedulerFactory();
        const result: T[] = [];

        const subscription = pipe(
          observable,
          Observable$forEach<T>(next => {
            result.push(next);
          }),
          Observable$subscribe(scheduler),
        );

        Continuation$run(scheduler);
        const error = Disposable$getError(subscription);

        return isSome(error) ? raise<T[]>(error) : result;
      } else {
        return [];
      }
    };

export default Observable$toReadonlyArray;
