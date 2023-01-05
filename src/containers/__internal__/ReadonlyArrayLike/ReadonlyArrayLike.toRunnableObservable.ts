import { hasDelay } from "../../../__internal__/scheduling/SchedulerLike.options";
import { ReadonlyArrayLike } from "../../../containers";
import { none, pipe } from "../../../functions";
import {
  ObserverLike,
  SinkLike_notify,
  ToRunnableObservable,
} from "../../../rx";
import { schedule } from "../../../rx/ObserverLike";
import EnumerableObservableLike__create from "../../../rx/__internal__/EnumerableObservableLike/EnumerableObservableLike.create";
import RunnableObservableLike__create from "../../../rx/__internal__/RunnableObservableLike/RunnableObservableLike.create";
import { yield_ } from "../../../scheduling/ContinuationLike";
import { dispose, isDisposed } from "../../../util/DisposableLike";
import ReadonlyArrayLike__toContainer from "./ReadonlyArrayLike.toContainer";

const ReadonlyArrayLike__toRunnableObservable: ToRunnableObservable<
  ReadonlyArrayLike,
  {
    readonly delay: number;
    readonly delayStart: boolean;
    readonly start: number;
    readonly count: number;
  }
>["toRunnableObservable"] = /*@__PURE__*/ (<T>() =>
  ReadonlyArrayLike__toContainer(
    (values: readonly T[], startIndex: number, count: number, options) => {
      const { delayStart = false } = options ?? {};

      const onSink = (observer: ObserverLike<T>) => {
        let index = startIndex,
          cnt = count;

        const continuation = () => {
          while (!isDisposed(observer) && cnt !== 0) {
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
              yield_(options);
            }
          }
          pipe(observer, dispose());
        };

        pipe(observer, schedule(continuation, delayStart ? options : none));
      };

      return hasDelay(options)
        ? RunnableObservableLike__create(onSink)
        : EnumerableObservableLike__create(onSink);
    },
  ))();

export default ReadonlyArrayLike__toRunnableObservable;
