import { ReadonlyArrayLike } from "../../../containers";
import { none, pipe } from "../../../functions";
import {
  ObserverLike,
  SinkLike_notify,
  ToRunnableObservable,
} from "../../../rx";
import EnumerableObservable_create from "../../../rx/__internal__/EnumerableObservable/EnumerableObservable.create";
import Observer_schedule from "../../../rx/__internal__/Observer/Observer.schedule";
import RunnableObservable_create from "../../../rx/__internal__/RunnableObservable/RunnableObservable.create";
import Continuation_yield_ from "../../../scheduling/__internal__/Continuation/Continuation.yield";
import { hasDelay } from "../../../scheduling/__internal__/Scheduler.options";
import Disposable_dispose from "../../../util/__internal__/Disposable/Disposable.dispose";
import Disposable_isDisposed from "../../../util/__internal__/Disposable/Disposable.isDisposed";
import ReadonlyArray_toContainer from "./ReadonlyArray.toContainer";

const ReadonlyArray_toRunnableObservable: ToRunnableObservable<
  ReadonlyArrayLike,
  {
    readonly delay: number;
    readonly delayStart: boolean;
    readonly start: number;
    readonly count: number;
  }
>["toRunnableObservable"] = /*@__PURE__*/ (<T>() =>
  ReadonlyArray_toContainer(
    (values: readonly T[], startIndex: number, count: number, options) => {
      const { delayStart = false } = options ?? {};

      const onSink = (observer: ObserverLike<T>) => {
        let index = startIndex,
          cnt = count;

        const continuation = () => {
          while (!Disposable_isDisposed(observer) && cnt !== 0) {
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
