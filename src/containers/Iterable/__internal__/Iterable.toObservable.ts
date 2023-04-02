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
import Observer_schedule from "../../../rx/Observer/__internal__/Observer.schedule.js";
import Runnable_create from "../../../rx/Runnable/__internal__/Runnable.create.js";
import {
  ContinuationContextLike,
  ContinuationContextLike_yield,
} from "../../../scheduling.js";
import {
  DisposableLike_dispose,
  DisposableLike_isDisposed,
} from "../../../util.js";

interface IterableToObservable {
  <T>(): Function1<IterableLike<T>, EnumerableLike<T>>;
  <T>(options: unknown): Function1<IterableLike<T>, RunnableLike<T>>;
  <T>(options: {
    readonly delay: number;
    readonly delayStart?: boolean;
  }): Function1<IterableLike<T>, RunnableLike<T>>;
}
const Iterable_toObservable: IterableToObservable = (<T>(options?: {
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
        observer,
        Observer_schedule(continuation, delayStart ? options : none),
      );
    };

    const retval: ObservableLike<T> =
      delay > 0 ? Runnable_create(onSubscribe) : Enumerable_create(onSubscribe);

    return retval;
  }) as IterableToObservable;

export default Iterable_toObservable;
