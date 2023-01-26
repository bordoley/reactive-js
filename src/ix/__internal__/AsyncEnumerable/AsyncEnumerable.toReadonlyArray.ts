import { ReadonlyArrayLike, ToReadonlyArray } from "../../../containers";
import { pipe } from "../../../functions";
import { AsyncEnumerableLike } from "../../../ix";
import Observable_toReadonlyArray from "../../../rx/__internal__/Observable/Observable.toReadonlyArray";
import AsyncEnumerable_toObservable from "./AsyncEnumerable.toObservable";

const AsyncEnumerable_toReadonlyArray: ToReadonlyArray<AsyncEnumerableLike>["toReadonlyArray"] =

    <T>() =>
    (asyncEnumerable: AsyncEnumerableLike<T>): ReadonlyArrayLike<T> =>
      pipe(
        asyncEnumerable,
        AsyncEnumerable_toObservable<T>(),
        Observable_toReadonlyArray<T>(),
      );

export default AsyncEnumerable_toReadonlyArray;
