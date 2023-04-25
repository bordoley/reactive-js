import { abs } from "../../../__internal__/math.js";
import { ReadonlyArrayLike } from "../../../containers.js";
import Optional_toObservable from "../../../containers/Optional/__internal__/Optional.toObservable.js";
import {
  compose,
  decrement,
  increment,
  pipe,
  returns,
} from "../../../functions.js";
import ReadonlyArray_toContainer from "../../../keyed-containers/ReadonlyArray/__internal__/ReadonlyArray.toContainer.js";
import { ObservableLike } from "../../../rx.js";
import Enumerable_toAsyncEnumerable from "../../../rx/Enumerable/__internal__/Enumerable.toAsyncEnumerable.js";
import Observable_concatMap from "../../../rx/Observable/__internal__/Observable.concatMap.js";
import Observable_scan from "../../../rx/Observable/__internal__/Observable.scan.js";
import Observable_takeFirst from "../../../rx/Observable/__internal__/Observable.takeFirst.js";
import { AsyncEnumerableLike, ToAsyncEnumerable } from "../../../streaming.js";
import AsyncEnumerable_create from "../../../streaming/AsyncEnumerable/__internal__/AsyncEnumerable.create.js";
import ReadonlyArray_toObservable from "./ReadonlyArray.toObservable.js";

const ReadonlyArray_toAsyncEnumerable: ToAsyncEnumerable<
  ReadonlyArrayLike,
  {
    readonly delay?: number;
    readonly start?: number;
    readonly count?: number;
  }
>["toAsyncEnumerable"] = /*@__PURE__*/ (<T>() => {
  const ReadonlyArray_toAsyncEnumerableWithDelay = ReadonlyArray_toContainer<
    AsyncEnumerableLike,
    {
      readonly delay: number;
    }
  >(
    <T>(
      array: readonly T[],
      start: number,
      count: number,
      options?: {
        readonly delay: number;
      },
    ) =>
      AsyncEnumerable_create<T>(
        compose(
          count >= 0
            ? Observable_scan<ObservableLike, void, number>(
                increment,
                returns(start - 1),
              )
            : Observable_scan<ObservableLike, void, number>(
                decrement,
                returns(start + 1),
              ),
          Observable_concatMap((i: number) =>
            pipe(array[i], Optional_toObservable(options)),
          ),
          Observable_takeFirst<ObservableLike, T>({ count: abs(count) }),
        ),
      ),
  );

  return (options?: {
      readonly delay?: number;
      readonly start?: number;
      readonly count?: number;
    }) =>
    (array: ReadonlyArrayLike<T>) => {
      const delay = options?.delay ?? 0;

      return pipe(
        array,
        delay === 0
          ? compose(
              ReadonlyArray_toObservable<T>(
                options as {
                  readonly count: number;
                  readonly start: number;
                },
              ),
              Enumerable_toAsyncEnumerable(),
            )
          : ReadonlyArray_toAsyncEnumerableWithDelay(
              options as {
                readonly delay: number;
                readonly start?: number;
                readonly count?: number;
              },
            ),
      );
    };
})();

export default ReadonlyArray_toAsyncEnumerable;
