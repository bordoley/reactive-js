import { none, pipe } from "../../../functions.js";
import {
  ObserverLike,
  RunnableObservableLike,
  SinkLike_notify,
} from "../../../rx.js";
import EnumerableObservable_create from "../../../rx/EnumerableObservable/__internal__/EnumerableObservable.create.js";
import Observer_schedule from "../../../rx/Observer/__internal__/Observer.schedule.js";
import RunnableObservable_create from "../../../rx/RunnableObservable/__internal__/RunnableObservable.create.js";
import { Continuation__yield } from "../../../scheduling/Continuation/__internal__/Continuation.create.js";
import { hasDelay } from "../../../scheduling/__internal__/Scheduler.options.js";
import { DisposableLike_isDisposed } from "../../../util.js";
import Disposable_dispose from "../../../util/Disposable/__internal__/Disposable.dispose.js";
import ReadonlyArray_toContainer from "./ReadonlyArray.toContainer.js";

const ReadonlyArray_toRunnableObservable =
  /*@__PURE__*/
  ReadonlyArray_toContainer<
    RunnableObservableLike,
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

      const onSink = (observer: ObserverLike<T>) => {
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

            observer[SinkLike_notify](value);

            if (cnt !== 0) {
              Continuation__yield(delay);
            }
          }
          pipe(observer, Disposable_dispose());
        };

        pipe(
          observer,
          Observer_schedule(continuation, delayStart ? options : none),
        );
      };

      return hasDelay(options)
        ? RunnableObservable_create(onSink)
        : EnumerableObservable_create(onSink);
    },
  );

export default ReadonlyArray_toRunnableObservable;
