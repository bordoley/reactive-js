import { IterableLike } from "../../../containers.js";
import { Function1, none, pipe } from "../../../functions.js";
import {
  EnumerableLike,
  ObservableLike,
  ObserverLike,
  ObserverLike_notify,
  RunnableLike,
} from "../../../rx.js";
import Enumerable_create from "../../../rx/Enumerable/__internal__/Enumerable.create.js";
import Runnable_create from "../../../rx/Runnable/__internal__/Runnable.create.js";
import {
  ContinuationContextLike,
  ContinuationContextLike_yield,
  SchedulerLike_schedule,
} from "../../../scheduling.js";
import {
  DisposableLike_dispose,
  DisposableLike_isDisposed,
} from "../../../util.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";

interface IterableToObservable {
  toObservable<T>(): Function1<IterableLike<T>, EnumerableLike<T>>;
  toObservable<T>(
    options: unknown,
  ): Function1<IterableLike<T>, RunnableLike<T>>;
  toObservable<T>(options: {
    readonly delay: number;
    readonly delayStart?: boolean;
  }): Function1<IterableLike<T>, RunnableLike<T>>;
}
const Iterable_toObservable: IterableToObservable["toObservable"] = (<
    T,
  >(options?: {
    readonly delay?: number;
    readonly delayStart?: boolean;
  }) =>
  (iterable: IterableLike<T>) => {
    const { delay = 0, delayStart = false } = options ?? {};

    const onSubscribe = (observer: ObserverLike<T>) => {
      const iterator = iterable[Symbol.iterator]();

      const continuation = (ctx: ContinuationContextLike) => {
        while (!observer[DisposableLike_isDisposed]) {
          const next = iterator.next();

          if (!next.done) {
            observer[ObserverLike_notify](next.value);
            ctx[ContinuationContextLike_yield](delay);
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
