import { ReadonlyArrayLike } from "../../../containers";
import { increment, pipe, returns } from "../../../functions";
import { ToAsyncEnumerable } from "../../../ix";
import AsyncEnumerable_create from "../../../ix/__internal__/AsyncEnumerable/AsyncEnumerable.create";
import { ObservableLike } from "../../../rx";
import Observable_concatAll from "../../../rx/__internal__/Observable/Observable.concatAll";
import Observable_map from "../../../rx/__internal__/Observable/Observable.map";
import Observable_scan from "../../../rx/__internal__/Observable/Observable.scan";
import Observable_takeFirst from "../../../rx/__internal__/Observable/Observable.takeFirst";
import Container_concatMap from "../Container/ContainerLIke.concatMap";
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
>["toAsyncEnumerable"] = /*@__PURE__*/ (<T>() =>
  ReadonlyArray_toContainer(
    (array: readonly T[], start: number, count: number, options) =>
      AsyncEnumerable_create(
        Observable_scan(increment, returns(start - 1)),
        Container_concatMap<ObservableLike, number, T>(
          { map: Observable_map, concatAll: Observable_concatAll },
          (i: number) =>
            pipe([array[i]], ReadonlyArray_toRunnableObservable(options)),
        ),
        Observable_takeFirst({ count }),
      ),
  ))();

export default ReadonlyArray_toAsyncEnumerable;
