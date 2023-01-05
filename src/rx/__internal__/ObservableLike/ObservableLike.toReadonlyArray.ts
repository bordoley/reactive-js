import { ReadonlyArrayLike, ToReadonlyArray } from "../../../containers";
import { Factory, Function1, isSome, pipe } from "../../../functions";
import { ObservableLike } from "../../../rx";
import { VirtualTimeSchedulerLike } from "../../../scheduling";
import ContinuationLike__run from "../../../scheduling/__internal__/ContinuationLike/ContinuationLike.run";
import VirtualTimeSchedulerLike__create from "../../../scheduling/__internal__/VirtualTimeSchedulerLike/VirtualTimeSchedulerLike.create";
import DisposableLike__getException from "../../../util/__internal__/DisposableLike/DisposableLike.getException";
import ObservableLike__forEach from "./ObservableLike.forEach";
import ObservableLike__isRunnable from "./ObservableLike.isRunnable";
import ObservableLike__subscribe from "./ObservableLike.subscribe";

const ObservableLike__toReadonlyArray: ToReadonlyArray<ObservableLike>["toReadonlyArray"] =

    <T>(
      options: {
        readonly schedulerFactory?: Factory<VirtualTimeSchedulerLike>;
      } = {},
    ): Function1<ObservableLike<T>, ReadonlyArrayLike<T>> =>
    observable => {
      if (ObservableLike__isRunnable(observable)) {
        const { schedulerFactory = VirtualTimeSchedulerLike__create } = options;
        const scheduler = schedulerFactory();
        const result: T[] = [];

        const subscription = pipe(
          observable,
          ObservableLike__forEach<T>(next => {
            result.push(next);
          }),
          ObservableLike__subscribe(scheduler),
        );

        ContinuationLike__run(scheduler);
        const exception = DisposableLike__getException(subscription);

        if (isSome(exception)) {
          throw exception.cause;
        }

        return result;
      } else {
        return [];
      }
    };

export default ObservableLike__toReadonlyArray;
