import { Keep } from "../../../containers.js";
import { Predicate, compose, none, pipe } from "../../../functions.js";
import { ObservableLike } from "../../../rx.js";
import Observable_forEach from "../../../rx/Observable/__internal__/Observable.forEach.js";
import Observable_keep from "../../../rx/Observable/__internal__/Observable.keep.js";
import { AsyncEnumerableLike, StreamLike } from "../../../streaming.js";
import { DisposableLike, QueueableLike_enqueue } from "../../../util.js";
import AsyncEnumerable_lift from "./AsyncEnumerable.lift.js";
import AsyncEnumerator_lift from "./AsyncEnumerator.lift.js";

const AsyncEnumerable_keep: Keep<AsyncEnumerableLike>["keep"] = <T>(
  predicate: Predicate<T>,
) =>
  pipe(
    (delegate: StreamLike<void, T> & DisposableLike) =>
      pipe(
        delegate,
        AsyncEnumerator_lift(
          compose(
            Observable_forEach<ObservableLike, T>(x => {
              if (!predicate(x)) {
                delegate[QueueableLike_enqueue](none);
              }
            }),
            Observable_keep<ObservableLike, T>(predicate),
          ),
        ),
      ),
    AsyncEnumerable_lift(true, true),
  );

export default AsyncEnumerable_keep;
