import Disposable_addTo from "../../Disposable/__internal__/Disposable.addTo.js";
import Enumerable_create from "../../Enumerable/__internal__/Enumerable.create.js";
import Runnable_create from "../../Runnable/__internal__/Runnable.create.js";
import { Function1, none, pipe } from "../../functions.js";
import {
  DisposableLike_dispose,
  DisposableLike_isDisposed,
  EnumerableLike,
  ObservableLike,
  ObserverLike,
  SchedulerLike,
  SchedulerLike_schedule,
  SchedulerLike_yield,
  SinkLike_notify,
} from "../../types.js";

const Iterable_toObservable: <T>() => Function1<
  Iterable<T>,
  EnumerableLike<T>
> = (<T>(options?: {
    readonly delay?: number;
    readonly delayStart?: boolean;
  }) =>
  (iterable: Iterable<T>) => {
    const { delay = 0, delayStart = false } = options ?? {};

    const onSubscribe = (observer: ObserverLike<T>) => {
      const iterator = iterable[Symbol.iterator]();

      const continuation = (scheduler: SchedulerLike) => {
        while (!observer[DisposableLike_isDisposed]) {
          const next = iterator.next();

          if (!next.done) {
            observer[SinkLike_notify](next.value);
            scheduler[SchedulerLike_yield](delay);
          } else {
            observer[DisposableLike_dispose]();
          }
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

    const retval: ObservableLike<T> =
      delay > 0 ? Runnable_create(onSubscribe) : Enumerable_create(onSubscribe);

    return retval;
  }) as <T>() => Function1<Iterable<T>, EnumerableLike<T>>;

export default Iterable_toObservable;
