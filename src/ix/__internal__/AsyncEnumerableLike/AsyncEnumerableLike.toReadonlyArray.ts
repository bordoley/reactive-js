import { ReadonlyArrayLike, ToReadonlyArray } from "../../../containers";
import { pipe } from "../../../functions";
import { AsyncEnumerableLike } from "../../../ix";
import ObservableLike__toReadonlyArray from "../../../rx/__internal__/ObservableLike/ObservableLike.toReadonlyArray";
import AsyncEnumerable__toObservable from "./AsyncEnumerableLike.toObservable";

const AsyncEnumerableLike__toReadonlyArray: ToReadonlyArray<AsyncEnumerableLike>["toReadonlyArray"] =

    <T>() =>
    (asyncEnumerable: AsyncEnumerableLike<T>): ReadonlyArrayLike<T> =>
      pipe(
        asyncEnumerable,
        AsyncEnumerable__toObservable<T>(),
        ObservableLike__toReadonlyArray<T>(),
      );

export default AsyncEnumerableLike__toReadonlyArray;
