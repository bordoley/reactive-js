import { ReadonlyArrayLike, ToReadonlyArray } from "../../../containers";
import { pipe } from "../../../functions";
import { AsyncEnumerableLike } from "../../../ix";
import Observable_empty from "../../../rx/Observable/__internal__/Observable.empty";
import Observable_isRunnable from "../../../rx/Observable/__internal__/Observable.isRunnable";
import RunnableObservable_toReadonlyArray from "../../../rx/RunnableObservable/__internal__/RunnableObservable.toReadonlyArray";
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
