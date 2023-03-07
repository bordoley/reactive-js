import { errorWithWithDebugMessage, pipe } from "../../../functions.js";
import { RunnableLike, ToRunnable } from "../../../rx.js";
import Observable_throws from "../../../rx/Observable/__internal__/Observable.throws.js";
import {
  AsyncEnumerableLike,
  StreamableLike_isRunnable,
} from "../../../streaming.js";
import AsyncEnumerable_toObservable from "./AsyncEnumerable.toObservable.js";

const throwOptions = {
  raise: () => errorWithWithDebugMessage("AsyncEnumerable is not Runnable"),
};

const AsyncEnumerable_toRunnable: ToRunnable<AsyncEnumerableLike>["toRunnable"] =

    <T>() =>
    (enumerable: AsyncEnumerableLike<T>) =>
      enumerable[StreamableLike_isRunnable]
        ? (pipe(
            enumerable,
            AsyncEnumerable_toObservable<T>(),
          ) as RunnableLike<T>)
        : Observable_throws<T>(throwOptions);

export default AsyncEnumerable_toRunnable;
