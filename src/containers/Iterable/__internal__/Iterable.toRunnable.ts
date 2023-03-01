import { IterableLike } from "../../../containers.js";
import { none, pipe } from "../../../functions.js";
import Enumerable_create from "../../../ix/Enumerable/__internal__/Enumerable.create.js";
import { ObserverLike, ObserverLike_notify, ToRunnable } from "../../../rx.js";
import Observer_schedule from "../../../rx/Observer/__internal__/Observer.schedule.js";
import Runnable_create from "../../../rx/Runnable/__internal__/Runnable.create.js";
import { Continuation__yield } from "../../../scheduling/Continuation/__internal__/Continuation.create.js";
import { hasDelay } from "../../../scheduling/__internal__/Scheduler.options.js";
import { DisposableLike_isDisposed } from "../../../util.js";
import Disposable_dispose from "../../../util/Disposable/__internal__/Disposable.dispose.js";

const Iterable_toRunnable: ToRunnable<
  IterableLike,
  {
    delay?: number;
    delayStart?: boolean;
  }
>["toRunnable"] =
  <T>(options?: { delay?: number; delayStart?: boolean }) =>
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

    return hasDelay(options)
      ? Runnable_create(onSubscribe)
      : Enumerable_create(onSubscribe);
  };

export default Iterable_toRunnable;
