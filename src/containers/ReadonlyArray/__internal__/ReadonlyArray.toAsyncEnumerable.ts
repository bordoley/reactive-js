import { abs } from "../../../__internal__/math.js";
import { ReadonlyArrayLike } from "../../../containers.js";
import { decrement, increment, pipe, returns } from "../../../functions.js";
import { AsyncEnumerableLike, ToAsyncEnumerable } from "../../../ix.js";
import EnumerableAsyncEnumerable_create from "../../../ix/EnumerableAsyncEnumerable/__internal__/EnumerableAsyncEnumerable.create.js";
import RunnableAsyncEnumerable_create from "../../../ix/RunnableAsyncEnumerable/__internal__/RunnableAsyncEnumerable.create.js";
import Observable_concatMap from "../../../rx/Observable/__internal__/Observable.concatMap.js";
import Observable_map from "../../../rx/Observable/__internal__/Observable.map.js";
import Observable_scan from "../../../rx/Observable/__internal__/Observable.scan.js";
import Observable_takeFirst from "../../../rx/Observable/__internal__/Observable.takeFirst.js";
import ReadonlyArray_toContainer from "./ReadonlyArray.toContainer.js";
import ReadonlyArray_toRunnableObservable from "./ReadonlyArray.toRunnableObservable.js";

const ReadonlyArray_toAsyncEnumerable: ToAsyncEnumerable<
  ReadonlyArrayLike,
  {
    readonly delay?: number;
    readonly delayStart?: boolean;
    readonly start?: number;
    readonly count?: number;
  }
>["toAsyncEnumerable"] =
  /*@__PURE__*/
  ReadonlyArray_toContainer<
    AsyncEnumerableLike,
    {
      readonly delay?: number;
      readonly delayStart?: boolean;
    }
  >(
    <T>(
      array: readonly T[],
      start: number,
      count: number,
      options?: {
        readonly delay?: number;
        readonly delayStart?: boolean;
      },
    ) => {
      const delay = options?.delay ?? 0 > 0;

      const create =
        delay > 0
          ? RunnableAsyncEnumerable_create
          : EnumerableAsyncEnumerable_create;

      // FIXME: any cast is weak
      return (create as any)(
        count >= 0
          ? Observable_scan(increment, returns(start - 1))
          : Observable_scan(decrement, returns(start + 1)),
        delay ?? 0 > 0
          ? Observable_concatMap((i: number) =>
              pipe([array[i]], ReadonlyArray_toRunnableObservable(options)),
            )
          : Observable_map((i: number) => array[i]),
        Observable_takeFirst({ count: abs(count) }),
      );
    },
  );

export default ReadonlyArray_toAsyncEnumerable;
