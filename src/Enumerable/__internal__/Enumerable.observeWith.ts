import Disposable_addTo from "../../Disposable/__internal__/Disposable.addTo.js";
import { none, pipe } from "../../functions.js";
import {
  DisposableLike_dispose,
  DisposableLike_isDisposed,
  EnumerableLike,
  EnumerableLike_enumerate,
  EnumeratorLike_current,
  EnumeratorLike_move,
  ObserverLike,
  SchedulerLike,
  SchedulerLike_schedule,
  SchedulerLike_yield,
  SinkLike_notify,
} from "../../types.js";

const Enumerable_observeWith =
  <T>(
    observer: ObserverLike<T>,
    options?: { delay?: number; delayStart?: boolean },
  ) =>
  (enumerable: EnumerableLike<T>) => {
    const { delay = 0, delayStart = false } = options ?? {};

    const enumerator = pipe(
      enumerable[EnumerableLike_enumerate](),
      Disposable_addTo(observer),
    );

    const continuation = (scheduler: SchedulerLike) => {
      while (
        !observer[DisposableLike_isDisposed] &&
        enumerator[EnumeratorLike_move]()
      ) {
        const next = enumerator[EnumeratorLike_current];
        observer[SinkLike_notify](next);
        scheduler[SchedulerLike_yield](delay);
      }
      observer[DisposableLike_dispose]();
    };

    pipe(
      observer[SchedulerLike_schedule](
        continuation,
        delayStart ? options : none,
      ),
      Disposable_addTo(observer),
    );
  };

export default Enumerable_observeWith;
