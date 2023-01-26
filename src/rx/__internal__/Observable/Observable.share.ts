import {
  Function1,
  Optional,
  isNone,
  isSome,
  none,
  pipe,
} from "../../../functions";
import { MulticastObservableLike, ObservableLike } from "../../../rx";
import MulticastObservable_getObserverCount from "../../../rx/__internal__/MulticastObservable/MulticastObservable.getObserverCount";
import { SchedulerLike } from "../../../scheduling";
import Disposable_dispose from "../../../util/__internal__/Disposable/Disposable.dispose";
import Disposable_onDisposed from "../../../util/__internal__/Disposable/Disposable.onDisposed";
import Sink_sourceFrom from "../Sink/Sink.sourceFrom";
import Observable_create from "./Observable.create";
import Observable_multicast from "./Observable.multicast";

const Observable_share =
  <T>(
    scheduler: SchedulerLike,
    options?: { readonly replay?: number },
  ): Function1<ObservableLike<T>, ObservableLike<T>> =>
  (source: ObservableLike<T>) => {
    let multicasted: Optional<MulticastObservableLike<T>> = none;

    // FIXME: Type test scheduler for VTS
    return Observable_create<T>(observer => {
      if (isNone(multicasted)) {
        multicasted = pipe(source, Observable_multicast(scheduler, options));
      }

      pipe(
        observer,
        Sink_sourceFrom(multicasted),
        Disposable_onDisposed(() => {
          if (
            isSome(multicasted) &&
            MulticastObservable_getObserverCount(multicasted) === 0
          ) {
            pipe(multicasted, Disposable_dispose());
            multicasted = none;
          }
        }),
      );
    });
  };

export default Observable_share;
