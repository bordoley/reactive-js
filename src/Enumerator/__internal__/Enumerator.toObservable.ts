import Disposable_addTo from "../../Disposable/__internal__/Disposable.addTo.js";
import Enumerable_create from "../../Enumerable/__internal__/Enumerable.create.js";
import type * as Enumerator from "../../Enumerator.js";
import Runnable_create from "../../Runnable/__internal__/Runnable.create.js";
import { none, pipe } from "../../functions.js";
import {
  DisposableLike_isDisposed,
  EnumeratorLike,
  EnumeratorLike_current,
  EnumeratorLike_move,
  ObserverLike,
  ObserverLike_notify,
  SchedulerLike,
  SchedulerLike_schedule,
  SchedulerLike_yield,
} from "../../types.js";

const Enumerator_toObservable: Enumerator.Signature["toObservable"] = (<
    T,
  >(options?: {
    readonly delay?: number;
    readonly delayStart?: boolean;
  }) =>
  (enumerator: EnumeratorLike<T>) => {
    const { delay = 0, delayStart = false } = options ?? {};

    const onSubscribe = (observer: ObserverLike<T>) => {
      const continuation = (scheduler: SchedulerLike) => {
        while (
          !observer[DisposableLike_isDisposed] &&
          enumerator[EnumeratorLike_move]()
        ) {
          const next = enumerator[EnumeratorLike_current];
          observer[ObserverLike_notify](next);
          scheduler[SchedulerLike_yield](delay);
        }
      };

      pipe(
        observer[SchedulerLike_schedule](
          continuation,
          delayStart ? options : none,
        ),
        Disposable_addTo(observer),
      );
    };

    return delay > 0
      ? Runnable_create(onSubscribe)
      : Enumerable_create(onSubscribe);
  }) as Enumerator.Signature["toObservable"];
export default Enumerator_toObservable;
