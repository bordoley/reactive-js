import Disposable_addTo from "../../Disposable/__internal__/Disposable.addTo.js";
import Enumerable_create from "../../Enumerable/__internal__/Enumerable.create.js";
import Runnable_create from "../../Runnable/__internal__/Runnable.create.js";
import { RunnableContainer } from "../../containers.js";
import { Function1, none, pipe } from "../../functions.js";
import {
  DisposableLike_dispose,
  DisposableLike_isDisposed,
  EnumerableLike,
  ObserverLike,
  ObserverLike_notify,
  RunnableLike,
  SchedulerLike,
  SchedulerLike_schedule,
  SchedulerLike_yield,
} from "../../types.js";
import ReadonlyArray_toContainer from "./ReadonlyArray.toContainer.js";

interface ReadonlyArrayToObservable {
  toObservable<T>(): Function1<ReadonlyArray<T>, EnumerableLike<T>>;
  toObservable<T>(options: {
    readonly count: number;
  }): Function1<ReadonlyArray<T>, EnumerableLike<T>>;
  toObservable<T>(options: {
    readonly count: number;
    readonly start: number;
  }): Function1<ReadonlyArray<T>, EnumerableLike<T>>;
  toObservable<T>(options: {
    readonly start: number;
  }): Function1<ReadonlyArray<T>, EnumerableLike<T>>;
  toObservable<T>(options: {
    readonly delay: number;
    readonly delayStart?: boolean;
    readonly count?: number;
    readonly start?: number;
  }): Function1<ReadonlyArray<T>, RunnableLike<T>>;
  toObservable<T>(
    options: unknown,
  ): Function1<ReadonlyArray<T>, RunnableLike<T>>;
}
const ReadonlyArray_toObservable: ReadonlyArrayToObservable["toObservable"] =
  /*@__PURE__*/
  ReadonlyArray_toContainer<
    RunnableContainer,
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
        readonly delay?: number;
        readonly delayStart?: boolean;
      },
    ) => {
      const { delay = 0, delayStart = false } = options ?? {};

      const onSubscribe = (observer: ObserverLike<T>) => {
        let index = startIndex,
          cnt = count;

        const continuation = (scheduler: SchedulerLike) => {
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

      return delay > 0
        ? Runnable_create(onSubscribe)
        : Enumerable_create(onSubscribe);
    },
  ) as ReadonlyArrayToObservable["toObservable"];

export default ReadonlyArray_toObservable;
