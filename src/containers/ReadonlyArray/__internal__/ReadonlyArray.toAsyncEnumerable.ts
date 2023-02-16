import { ReadonlyArrayLike } from "../../../containers";
import { abs, decrement, increment, pipe, returns } from "../../../functions";
import { AsyncEnumerableLike, ToAsyncEnumerable } from "../../../ix";
import AsyncEnumerable_create from "../../../ix/AsyncEnumerable/__internal__/AsyncEnumerable.create";
import { ObservableLike } from "../../../rx";
import Observable_concatAll from "../../../rx/Observable/__internal__/Observable.concatAll";
import Observable_map from "../../../rx/Observable/__internal__/Observable.map";
import Observable_scan from "../../../rx/Observable/__internal__/Observable.scan";
import Observable_takeFirst from "../../../rx/Observable/__internal__/Observable.takeFirst";
import Container_concatMap from "../../Container/__internal__/Container.concatMap";
import ReadonlyArray_toContainer from "./ReadonlyArray.toContainer";
import ReadonlyArray_toRunnableObservable from "./ReadonlyArray.toRunnableObservable";

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
    ) =>
      AsyncEnumerable_create(
        count >= 0
          ? Observable_scan(increment, returns(start - 1))
          : Observable_scan(decrement, returns(start + 1)),
        Container_concatMap<ObservableLike, number, T>(
          { map: Observable_map, concatAll: Observable_concatAll },
          (i: number) =>
            pipe([array[i]], ReadonlyArray_toRunnableObservable(options)),
        ),
        Observable_takeFirst({ count: abs(count) }),
      ),
  );

export default ReadonlyArray_toAsyncEnumerable;
