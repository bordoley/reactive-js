import { ReadonlyArrayLike, ToReadonlyArray } from "../../../containers";
import { pipe } from "../../../functions";
import { AsyncEnumerableLike } from "../../../ix";
import Observable_empty from "../../../rx/__internal__/Observable/Observable.empty";
import Observable_isRunnable from "../../../rx/__internal__/Observable/Observable.isRunnable";
import RunnableObservable_toReadonlyArray from "../../../rx/__internal__/RunnableObservable/RunnableObservable.toReadonlyArray";
import AsyncEnumerable_toObservable from "./AsyncEnumerable.toObservable";

const AsyncEnumerable_toReadonlyArray: ToReadonlyArray<AsyncEnumerableLike>["toReadonlyArray"] =

    <T>() =>
    (asyncEnumerable: AsyncEnumerableLike<T>): ReadonlyArrayLike<T> =>
      pipe(
        asyncEnumerable,
        AsyncEnumerable_toObservable<T>(),
        x => (Observable_isRunnable(x) ? x : Observable_empty()),
        RunnableObservable_toReadonlyArray<T>(),
      );

export default AsyncEnumerable_toReadonlyArray;
