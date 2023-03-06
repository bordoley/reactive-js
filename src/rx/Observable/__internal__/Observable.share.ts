import {
  Function1,
  Optional,
  isNone,
  isSome,
  none,
  pipe,
} from "../../../functions.js";
import {
  MulticastObservableLike,
  MulticastObservableLike_observerCount,
  ObservableLike,
} from "../../../rx.js";
import { SchedulerLike } from "../../../scheduling.js";
import Disposable_dispose from "../../../util/Disposable/__internal__/Disposable.dispose.js";
import Disposable_onDisposed from "../../../util/Disposable/__internal__/Disposable.onDisposed.js";
import Observer_sourceFrom from "../../Observer/__internal__/Observer.sourceFrom.js";
import Observable_create from "./Observable.create.js";
import Observable_multicast from "./Observable.multicast.js";

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
        Observer_sourceFrom(multicasted),
        Disposable_onDisposed(() => {
          if (
            isSome(multicasted) &&
            multicasted[MulticastObservableLike_observerCount] === 0
          ) {
            pipe(multicasted, Disposable_dispose());
            multicasted = none;
          }
        }),
      );
    });
  };

export default Observable_share;
