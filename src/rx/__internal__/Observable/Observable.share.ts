import {
  Function1,
  Optional,
  isNone,
  isSome,
  none,
  pipe,
} from "../../../functions";
import { MulticastObservableLike, ObservableLike } from "../../../rx";
import MulticastObservable$getObserverCount from "../../../rx/__internal__/MulticastObservable/MulticastObservable.getObserverCount";
import { SchedulerLike } from "../../../scheduling";
import Disposable$dispose from "../../../util/__internal__/Disposable/Disposable.dispose";
import Disposable$onDisposed from "../../../util/__internal__/Disposable/Disposable.onDisposed";
import Sink$sourceFrom from "../Sink/Sink.sourceFrom";
import Observable$create from "./Observable.create";
import Observable$multicast from "./Observable.multicast";

const Observable$share =
  <T>(
    scheduler: SchedulerLike,
    options?: { readonly replay?: number },
  ): Function1<ObservableLike<T>, ObservableLike<T>> =>
  (source: ObservableLike<T>) => {
    let multicasted: Optional<MulticastObservableLike<T>> = none;

    // FIXME: Type test scheduler for VTS
    return Observable$create<T>(observer => {
      if (isNone(multicasted)) {
        multicasted = pipe(source, Observable$multicast(scheduler, options));
      }

      pipe(
        observer,
        Sink$sourceFrom(multicasted),
        Disposable$onDisposed(() => {
          if (
            isSome(multicasted) &&
            MulticastObservable$getObserverCount(multicasted) === 0
          ) {
            pipe(multicasted, Disposable$dispose());
            multicasted = none;
          }
        }),
      );
    });
  };

export default Observable$share;
