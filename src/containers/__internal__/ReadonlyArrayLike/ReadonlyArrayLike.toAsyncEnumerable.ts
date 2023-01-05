import { ReadonlyArrayLike } from "../../../containers";
import { increment, pipe, returns } from "../../../functions";
import { ToAsyncEnumerable } from "../../../ix";
import AsyncEnumerableLike__create from "../../../ix/__internal__/AsyncEnumerableLike/AsyncEnumerableLike.create";
import { ObservableLike } from "../../../rx";
import ObservableLike__concatAllT from "../../../rx/__internal__/ObservableLike/ObservableLike.concatAllT";
import ObservableLike__mapT from "../../../rx/__internal__/ObservableLike/ObservableLike.mapT";
import ObservableLike__scan from "../../../rx/__internal__/ObservableLike/ObservableLike.scan";
import ObservableLike__takeFirst from "../../../rx/__internal__/ObservableLike/ObservableLike.takeFirst";
import ContainerLike__concatMap from "../ContainerLike/ContainerLIke.concatMap";
import ReadonlyArrayLike__toContainer from "./ReadonlyArrayLike.toContainer";
import ReadonlyArrayLike__toRunnableObservable from "./ReadonlyArrayLike.toRunnableObservable";

const ReadonlyArrayLike__toAsyncEnumerable: ToAsyncEnumerable<
  ReadonlyArrayLike,
  {
    readonly delay: number;
    readonly delayStart: boolean;
    readonly start: number;
    readonly count: number;
  }
>["toAsyncEnumerable"] = /*@__PURE__*/ (<T>() =>
  ReadonlyArrayLike__toContainer(
    (array: readonly T[], start: number, count: number, options) =>
      AsyncEnumerableLike__create(
        ObservableLike__scan(increment, returns(start - 1)),
        ContainerLike__concatMap<ObservableLike, number, T>(
          { ...ObservableLike__mapT, ...ObservableLike__concatAllT },
          (i: number) =>
            pipe([array[i]], ReadonlyArrayLike__toRunnableObservable(options)),
        ),
        ObservableLike__takeFirst({ count }),
      ),
  ))();

export default ReadonlyArrayLike__toAsyncEnumerable;
