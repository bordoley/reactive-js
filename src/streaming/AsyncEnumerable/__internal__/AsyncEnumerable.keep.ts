import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { Keep } from "../../../containers.js";
import { Predicate, compose, none, partial, pipe } from "../../../functions.js";
import { ObservableLike } from "../../../rx.js";
import Observable_forEach from "../../../rx/Observable/__internal__/Observable.forEach.js";
import Observable_keep from "../../../rx/Observable/__internal__/Observable.keep.js";
import { AsyncEnumerableLike, StreamLike } from "../../../streaming.js";
import { QueueableLike_push } from "../../../util.js";
import AsyncEnumerable_lift from "./AsyncEnumerable.lift.js";
import AsyncEnumerator_delegatingMixin from "./AsyncEnumerator.delegatingMixin.js";

const AsyncEnumerable_keep: Keep<AsyncEnumerableLike>["keep"] = /*@__PURE__*/ (<
  T,
>() => {
  const createKeepStream = createInstanceFactory(
    mix(
      include(AsyncEnumerator_delegatingMixin<T, T>()),
      function KeepStream(
        instance: unknown,
        delegate: StreamLike<void, T>,
        predicate: Predicate<T>,
      ): StreamLike<void, T> {
        const op = compose(
          Observable_forEach<ObservableLike, T>(x => {
            if (!predicate(x)) {
              delegate[QueueableLike_push](none);
            }
          }),
          Observable_keep(predicate),
        );

        init(AsyncEnumerator_delegatingMixin<T, T>(), instance, delegate, op);

        return instance;
      },
      props({}),
      {},
    ),
  );

  return ((predicate: Predicate<T>) =>
    pipe(
      createKeepStream,
      partial(predicate),
      AsyncEnumerable_lift(true, true),
    )) as Keep<AsyncEnumerableLike>["keep"];
})();

export default AsyncEnumerable_keep;
