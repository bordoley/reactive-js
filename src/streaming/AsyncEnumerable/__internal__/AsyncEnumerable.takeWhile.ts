import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { TakeWhile } from "../../../containers.js";
import { Predicate, partial, pipe } from "../../../functions.js";
import Observable_takeWhile from "../../../rx/Observable/__internal__/Observable.takeWhile.js";
import { AsyncEnumerableLike, StreamLike } from "../../../streaming.js";
import AsyncEnumerable_lift from "./AsyncEnumerable.lift.js";
import AsyncEnumerator_delegatingMixin from "./AsyncEnumerator.delegatingMixin.js";

const AsyncEnumerable_takeWhile: TakeWhile<AsyncEnumerableLike>["takeWhile"] =
  /*@__PURE__*/ (<T>() => {
    const createTakeWhileStream = createInstanceFactory(
      mix(
        include(AsyncEnumerator_delegatingMixin<T, T>()),
        function TakeWhileStream(
          instance: unknown,
          delegate: StreamLike<void, T>,
          predicate: Predicate<T>,
          inclusive: boolean,
        ): StreamLike<void, T> {
          init(
            AsyncEnumerator_delegatingMixin<T, T>(),
            instance,
            delegate,
            Observable_takeWhile(predicate, { inclusive }),
          );

          return instance;
        },
        props({}),
        {},
      ),
    );

    return (
      predicate: Predicate<T>,
      options: { readonly inclusive?: boolean } = {},
    ) => {
      const { inclusive = false } = options;
      return pipe(
        createTakeWhileStream,
        partial(predicate, inclusive),
        AsyncEnumerable_lift(true, true),
      );
    };
  })();

export default AsyncEnumerable_takeWhile;
