import { none, pipe } from "../../../functions";
import {
  ObserverLike,
  RunnableObservableLike,
  SinkLike_notify,
} from "../../../rx";
import EnumerableObservable_create from "../../../rx/EnumerableObservable/__internal__/EnumerableObservable.create";
import Observer_schedule from "../../../rx/Observer/__internal__/Observer.schedule";
import RunnableObservable_create from "../../../rx/RunnableObservable/__internal__/RunnableObservable.create";
import { __yield } from "../../../scheduling/Continuation/effects";
import { hasDelay } from "../../../scheduling/__internal__/Scheduler.options";
import { DisposableLike_isDisposed } from "../../../util";
import Disposable_dispose from "../../../util/Disposable/__internal__/Disposable.dispose";
import ReadonlyArray_toContainer from "./ReadonlyArray.toContainer";

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
              __yield(delay);
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
