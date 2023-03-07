import { errorWithWithDebugMessage, pipe } from "../../../functions.js";
import { EnumerableLike, ToEnumerable } from "../../../rx.js";
import Observable_throws from "../../../rx/Observable/__internal__/Observable.throws.js";
import {
  AsyncEnumerableLike,
  StreamableLike_isEnumerable,
} from "../../../streaming.js";
import AsyncEnumerable_toObservable from "./AsyncEnumerable.toObservable.js";

const throwOptions = {
  raise: () => errorWithWithDebugMessage("AsyncEnumerable is not Enumerable"),
};

const AsyncEnumerable_toEnumerable: ToEnumerable<AsyncEnumerableLike>["toEnumerable"] =

    <T>() =>
    (enumerable: AsyncEnumerableLike<T>) =>
      enumerable[StreamableLike_isEnumerable]
        ? (pipe(
            enumerable,
            AsyncEnumerable_toObservable<T>(),
          ) as EnumerableLike<T>)
        : Observable_throws<T>(throwOptions);

export default AsyncEnumerable_toEnumerable;
