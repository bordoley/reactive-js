import { ReadonlyArrayLike } from "../../../containers.js";
import { Function1, none, pipe } from "../../../functions.js";
import {
  EnumerableLike,
  ObserverLike,
  ObserverLike_notify,
  RunnableLike,
} from "../../../rx.js";
import Enumerable_create from "../../../rx/Enumerable/__internal__/Enumerable.create.js";
import Observer_schedule from "../../../rx/Observer/__internal__/Observer.schedule.js";
import Runnable_create from "../../../rx/Runnable/__internal__/Runnable.create.js";
import { Continuation__yield } from "../../../scheduling/Continuation/__internal__/Continuation.create.js";
import { hasDelay } from "../../../scheduling/__internal__/Scheduler.options.js";
import {
  DisposableLike_dispose,
  DisposableLike_isDisposed,
} from "../../../util.js";
import ReadonlyArray_toContainer from "./ReadonlyArray.toContainer.js";

interface ReadonlyArrayToObservable {
  <T>(): Function1<ReadonlyArrayLike<T>, EnumerableLike<T>>;
  <T>(options: unknown): Function1<ReadonlyArrayLike<T>, RunnableLike<T>>;
  <T>(options: { count: number }): Function1<
    ReadonlyArrayLike<T>,
    EnumerableLike<T>
  >;
  <T>(options: { count: number; start: number }): Function1<
    ReadonlyArrayLike<T>,
    EnumerableLike<T>
  >;
  <T>(options: { start: number }): Function1<
    ReadonlyArrayLike<T>,
    EnumerableLike<T>
  >;
  <T>(options: {
    delay: number;
    delayStart?: boolean;
    count?: number;
    start?: number;
  }): Function1<ReadonlyArrayLike<T>, RunnableLike<T>>;
}
const ReadonlyArray_toObservable: ReadonlyArrayToObservable =
  /*@__PURE__*/
  ReadonlyArray_toContainer<
    RunnableLike,
    {
      delay?: number;
      delayStart?: boolean;
    }
  >(
    <T>(
      values: readonly T[],
      startIndex: number,
      count: number,
      options?: {
        delay?: number;
        delayStart?: boolean;
      },
    ) => {
      const { delay = 0, delayStart = false } = options ?? {};

      const onSubscribe = (observer: ObserverLike<T>) => {
        let index = startIndex,
          cnt = count;

        const continuation = () => {
          while (!observer[DisposableLike_isDisposed] && cnt !== 0) {
            const value = values[index];
            if (cnt > 0) {
              index++;
              cnt--;
            } else {
              index--;
              cnt++;
            }

            observer[ObserverLike_notify](value);

            if (cnt !== 0) {
              Continuation__yield(delay);
            }
          }
          observer[DisposableLike_dispose]();
        };

        pipe(
          observer,
          Observer_schedule(continuation, delayStart ? options : none),
        );
      };

      return hasDelay(options)
        ? Runnable_create(onSubscribe)
        : Enumerable_create(onSubscribe);
    },
  ) as ReadonlyArrayToObservable;

export default ReadonlyArray_toObservable;
