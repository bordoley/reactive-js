import { ReadonlyArrayLike } from "../../../containers";
import { none, pipe } from "../../../functions";
import {
  ObserverLike,
  SinkLike_notify,
  ToRunnableObservable,
} from "../../../rx";
import EnumerableObservable_create from "../../../rx/EnumerableObservable/__internal__/EnumerableObservable.create";
import Observer_schedule from "../../../rx/Observer/__internal__/Observer.schedule";
import RunnableObservable_create from "../../../rx/RunnableObservable/__internal__/RunnableObservable.create";
import Continuation_yield_ from "../../../scheduling/Continuation/__internal__/Continuation.yield";
import { hasDelay } from "../../../scheduling/__internal__/Scheduler.options";
import { DisposableLike_isDisposed } from "../../../util";
import Disposable_dispose from "../../../util/Disposable/__internal__/Disposable.dispose";
import ReadonlyArray_toContainer from "./ReadonlyArray.toContainer";

const ReadonlyArray_toRunnableObservable: ToRunnableObservable<
  ReadonlyArrayLike,
  {
    readonly delay?: number;
    readonly delayStart?: boolean;
    readonly start?: number;
    readonly count?: number;
  }
>["toRunnableObservable"] = /*@__PURE__*/ (<T>() =>
  ReadonlyArray_toContainer(
    (values: readonly T[], startIndex: number, count: number, options) => {
      const { delayStart = false } = options ?? {};

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
              Continuation_yield_(options);
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
  ))();

export default ReadonlyArray_toRunnableObservable;
