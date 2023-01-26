import { ReadonlyArrayLike, ToReadonlyArray } from "../../../containers";
import { pipe } from "../../../functions";
import { AsyncEnumerableLike } from "../../../ix";
import Observable$toReadonlyArray from "../../../rx/__internal__/Observable/Observable.toReadonlyArray";
import AsyncEnumerable$toObservable from "./AsyncEnumerable.toObservable";

const AsyncEnumerable$toReadonlyArray: ToReadonlyArray<AsyncEnumerableLike>["toReadonlyArray"] =

    <T>() =>
    (asyncEnumerable: AsyncEnumerableLike<T>): ReadonlyArrayLike<T> =>
      pipe(
        asyncEnumerable,
        AsyncEnumerable$toObservable<T>(),
        Observable$toReadonlyArray<T>(),
      );

export default AsyncEnumerable$toReadonlyArray;
