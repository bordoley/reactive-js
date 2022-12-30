import { hasDelay } from "../../../__internal__/scheduling/SchedulerLike.options";
import { ReadonlyArrayLike } from "../../../containers";
import { SideEffect1, none, pipe } from "../../../functions";
import {
  ObserverLike,
  RunnableObservableLike,
  SinkLike_notify,
  ToRunnableObservable,
} from "../../../rx";
import { schedule } from "../../../rx/ObserverLike";
import EnumerableObservableLike__create from "../../../rx/__internal__/EnumerableObservableLike/EnumerableObservableLike.create";
import RunnableObservableLike__create from "../../../rx/__internal__/RunnableObservableLike/RunnableObservableLike.create";
import { yield_ } from "../../../scheduling/ContinuationLike";
import { dispose, isDisposed } from "../../../util/DisposableLike";
import ReadonlyArrayLike__toContainer from "./ReadonlyArrayLike.toContainer";

const toRunnableObservable: ToRunnableObservable<
  ReadonlyArrayLike,
  {
    delay?: number;
    delayStart?: boolean;
    count?: number;
    start?: number;
  }
>["toRunnableObservable"] = /*@__PURE__*/ (() => {
  const createArrayObservable = <T>(
    createObservable: (
      f: SideEffect1<ObserverLike<T>>,
    ) => RunnableObservableLike<T>,
    options?: {
      readonly delay?: number;
      readonly delayStart?: boolean;
    },
  ) =>
    ReadonlyArrayLike__toContainer<RunnableObservableLike<T>, T>(
      (values: readonly T[], startIndex: number, count: number) => {
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
        return createObservable(onSink);
      },
    );

  return <T>(options?: {
    readonly count?: number;
    readonly delay?: number;
    readonly delayStart?: boolean;
    readonly start?: number;
  }) => {
    const createObservableWithType = (f: SideEffect1<ObserverLike<T>>) =>
      hasDelay(options)
        ? RunnableObservableLike__create(f)
        : EnumerableObservableLike__create(f);

    return createArrayObservable(createObservableWithType, options)(options);
  };
})();

export default toRunnableObservable;
