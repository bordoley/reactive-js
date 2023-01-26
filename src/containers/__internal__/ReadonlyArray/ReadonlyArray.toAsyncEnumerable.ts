import { ReadonlyArrayLike } from "../../../containers";
import { increment, pipe, returns } from "../../../functions";
import { ToAsyncEnumerable } from "../../../ix";
import AsyncEnumerable$create from "../../../ix/__internal__/AsyncEnumerable/AsyncEnumerable.create";
import { ObservableLike } from "../../../rx";
import Observable$concatAll from "../../../rx/__internal__/Observable/Observable.concatAll";
import Observable$map from "../../../rx/__internal__/Observable/Observable.map";
import Observable$scan from "../../../rx/__internal__/Observable/Observable.scan";
import Observable$takeFirst from "../../../rx/__internal__/Observable/Observable.takeFirst";
import Container$concatMap from "../Container/ContainerLIke.concatMap";
import ReadonlyArray$toContainer from "./ReadonlyArray.toContainer";
import ReadonlyArray$toRunnableObservable from "./ReadonlyArray.toRunnableObservable";

const ReadonlyArray$toAsyncEnumerable: ToAsyncEnumerable<
  ReadonlyArrayLike,
  {
    readonly delay: number;
    readonly delayStart: boolean;
    readonly start: number;
    readonly count: number;
  }
>["toAsyncEnumerable"] = /*@__PURE__*/ (<T>() =>
  ReadonlyArray$toContainer(
    (array: readonly T[], start: number, count: number, options) =>
      AsyncEnumerable$create(
        Observable$scan(increment, returns(start - 1)),
        Container$concatMap<ObservableLike, number, T>(
          { map: Observable$map, concatAll: Observable$concatAll },
          (i: number) =>
            pipe([array[i]], ReadonlyArray$toRunnableObservable(options)),
        ),
        Observable$takeFirst({ count }),
      ),
  ))();

export default ReadonlyArray$toAsyncEnumerable;
