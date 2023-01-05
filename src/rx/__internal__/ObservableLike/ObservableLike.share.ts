import {
  Function1,
  Optional,
  isNone,
  isSome,
  none,
  pipe,
} from "../../../functions";
import { MulticastObservableLike, ObservableLike } from "../../../rx";
import MulticastObservableLike__getObserverCount from "../../../rx/__internal__/MulticastObservableLike/MulticastObservableLike.getObserverCount";
import { SchedulerLike } from "../../../scheduling";
import { dispose, onDisposed } from "../../../util/DisposableLike";
import { sourceFrom } from "../../SinkLike";
import ObservableLike__create from "./ObservableLike.create";
import ObservableLike__multicast from "./ObservableLike.multicast";

const ObservableLike__share =
  <T>(
    scheduler: SchedulerLike,
    options?: { readonly replay?: number },
  ): Function1<ObservableLike<T>, ObservableLike<T>> =>
  (source: ObservableLike<T>) => {
    let multicasted: Optional<MulticastObservableLike<T>> = none;

    // FIXME: Type test scheduler for VTS
    return ObservableLike__create<T>(observer => {
      if (isNone(multicasted)) {
        multicasted = pipe(
          source,
          ObservableLike__multicast(scheduler, options),
        );
      }

      pipe(
        observer,
        sourceFrom(multicasted),
        onDisposed(() => {
          if (
            isSome(multicasted) &&
            MulticastObservableLike__getObserverCount(multicasted) === 0
          ) {
            pipe(multicasted, dispose());
            multicasted = none;
          }
        }),
      );
    });
  };

export default ObservableLike__share;
