import Disposable_addTo from "../../Disposable/__internal__/Disposable.addTo.js";
import Enumerable_create from "../../Enumerable/__internal__/Enumerable.create.js";
import type * as ReadonlyArray from "../../ReadonlyArray.js";
import type * as Runnable from "../../Runnable.js";
import Runnable_create from "../../Runnable/__internal__/Runnable.create.js";
import { none, pipe } from "../../functions.js";
import {
  DisposableLike_dispose,
  DisposableLike_isDisposed,
  ObserverLike,
  ObserverLike_notify,
  SchedulerLike,
  SchedulerLike_schedule,
  SchedulerLike_yield,
} from "../../types.js";
import ReadonlyArray_toContainer from "./ReadonlyArray.toContainer.js";

const ReadonlyArray_toRunnable: ReadonlyArray.Signature["toRunnable"] =
  /*@__PURE__*/
  ReadonlyArray_toContainer<
    Runnable.Type,
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
  ) as ReadonlyArray.Signature["toRunnable"];

export default ReadonlyArray_toRunnable;
