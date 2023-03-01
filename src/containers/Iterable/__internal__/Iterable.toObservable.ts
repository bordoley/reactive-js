import { IterableLike } from "../../../containers.js";
import { Function1, none, pipe } from "../../../functions.js";
import { EnumerableLike } from "../../../ix.js";
import Enumerable_create from "../../../ix/Enumerable/__internal__/Enumerable.create.js";
import {
  ObservableLike,
  ObserverLike,
  ObserverLike_notify,
  RunnableLike,
} from "../../../rx.js";
import Observer_schedule from "../../../rx/Observer/__internal__/Observer.schedule.js";
import Runnable_create from "../../../rx/Runnable/__internal__/Runnable.create.js";
import { Continuation__yield } from "../../../scheduling/Continuation/__internal__/Continuation.create.js";
import { hasDelay } from "../../../scheduling/__internal__/Scheduler.options.js";
import { DisposableLike_isDisposed } from "../../../util.js";
import Disposable_dispose from "../../../util/Disposable/__internal__/Disposable.dispose.js";

interface IterableToObservable {
  <T>(): Function1<IterableLike<T>, EnumerableLike<T>>;
  <T>(options: unknown): Function1<IterableLike<T>, RunnableLike<T>>;
  <T>(options: { delay: number; delayStart?: boolean }): Function1<
    IterableLike<T>,
    RunnableLike<T>
  >;
}
const Iterable_toObservable: IterableToObservable = (<T>(options?: {
    delay?: number;
    delayStart?: boolean;
  }) =>
  (iterable: IterableLike<T>) => {
    const { delay = 0, delayStart = false } = options ?? {};

    const onSubscribe = (observer: ObserverLike<T>) => {
      const iterator = iterable[Symbol.iterator]();

      const continuation = () => {
        while (!observer[DisposableLike_isDisposed]) {
          const next = iterator.next();

          if (!next.done) {
            observer[ObserverLike_notify](next.value);
            Continuation__yield(delay);
          } else {
            pipe(observer, Disposable_dispose());
          }
        }
      };

      pipe(
        observer,
        Observer_schedule(continuation, delayStart ? options : none),
      );
    };

    const retval: ObservableLike<T> = hasDelay(options)
      ? Runnable_create(onSubscribe)
      : Enumerable_create(onSubscribe);

    return retval;
  }) as IterableToObservable;

export default Iterable_toObservable;
