import { errorWithDebugMessage } from "../../../functions.js";
import {
  EnumerableLike,
  ObservableLike_isEnumerable,
  ToEnumerable,
} from "../../../rx.js";
import Observable_throws from "../../../rx/Observable/__internal__/Observable.throws.js";
import { AsyncEnumerableLike } from "../../../streaming.js";

const throwOptions = {
  raise: () => errorWithDebugMessage("AsyncEnumerable is not Enumerable"),
};

const AsyncEnumerable_toEnumerable: ToEnumerable<AsyncEnumerableLike>["toEnumerable"] =

    <T>() =>
    (enumerable: AsyncEnumerableLike<T>) =>
      enumerable[ObservableLike_isEnumerable]
        ? (enumerable as EnumerableLike<T>)
        : Observable_throws<T>(throwOptions);

export default AsyncEnumerable_toEnumerable;
