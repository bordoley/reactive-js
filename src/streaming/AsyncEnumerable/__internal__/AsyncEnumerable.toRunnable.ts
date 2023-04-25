import { errorWithDebugMessage } from "../../../functions.js";
import {
  ObservableLike_isRunnable,
  RunnableLike,
  ToRunnable,
} from "../../../rx.js";
import Observable_throws from "../../../rx/Observable/__internal__/Observable.throws.js";
import { AsyncEnumerableLike } from "../../../streaming.js";

const throwOptions = {
  raise: () => errorWithDebugMessage("AsyncEnumerable is not Runnable"),
};

const AsyncEnumerable_toRunnable: ToRunnable<AsyncEnumerableLike>["toRunnable"] =

    <T>() =>
    (enumerable: AsyncEnumerableLike<T>) =>
      enumerable[ObservableLike_isRunnable]
        ? (enumerable as RunnableLike<T>)
        : Observable_throws<T>(throwOptions);

export default AsyncEnumerable_toRunnable;
