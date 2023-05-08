import {
  DisposableLike_dispose,
  DisposableLike_isDisposed,
  EnumerableLike,
  ObservableLike,
  ObserverLike,
  ObserverLike_notify,
  RunnableLike,
  SchedulerLike,
  SchedulerLike_schedule,
  SchedulerLike_yield,
} from "../../../core.js";
import Disposable_addTo from "../../../core/Disposable/__internal__/Disposable.addTo.js";
import Enumerable_create from "../../../core/Enumerable/__internal__/Enumerable.create.js";
import Runnable_create from "../../../core/Runnable/__internal__/Runnable.create.js";
import { Function1, none, pipe } from "../../../functions.js";

interface IterableToObservable {
  toObservable<T>(): Function1<Iterable<T>, EnumerableLike<T>>;
  toObservable<T>(options: unknown): Function1<Iterable<T>, RunnableLike<T>>;
  toObservable<T>(options: {
    readonly delay: number;
    readonly delayStart?: boolean;
  }): Function1<Iterable<T>, RunnableLike<T>>;
}
const Iterable_toObservable: IterableToObservable["toObservable"] = (<
    T,
  >(options?: {
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
            observer[ObserverLike_notify](next.value);
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
  }) as IterableToObservable["toObservable"];

export default Iterable_toObservable;
