import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { ContainerOperator } from "../../../containers.js";
import { Factory, Function2, partial, pipe } from "../../../functions.js";
import { ObservableLike, ScanLast } from "../../../rx.js";
import Observable_scanLast from "../../../rx/Observable/__internal__/Observable.scanLast.js";
import { AsyncEnumerableLike, StreamLike } from "../../../streaming.js";
import AsyncEnumerable_lift from "./AsyncEnumerable.lift.js";
import AsyncEnumerator_delegatingMixin from "./AsyncEnumerator.delegatingMixin.js";

const AsyncEnumerable_scanLast: ScanLast<
  AsyncEnumerableLike,
  ObservableLike
>["scanLast"] = /*@__PURE__*/ (<T, TAcc>() => {
  const createScanLastStream = createInstanceFactory(
    mix(
      include(AsyncEnumerator_delegatingMixin<T, TAcc>()),
      function ScanLastStream(
        instance: unknown,
        delegate: StreamLike<void, T>,
        reducer: Function2<TAcc, T, ObservableLike<TAcc>>,
        initialValue: Factory<TAcc>,
      ): StreamLike<void, TAcc> {
        init(
          AsyncEnumerator_delegatingMixin<T, TAcc>(),
          instance,
          delegate,
          Observable_scanLast(reducer, initialValue),
        );

        return instance;
      },
      props({}),
      {},
    ),
  );

  return (
    reducer: Function2<TAcc, T, ObservableLike<TAcc>>,
    initialValue: Factory<TAcc>,
  ): ContainerOperator<AsyncEnumerableLike, T, TAcc> =>
    pipe(
      createScanLastStream,
      partial(reducer, initialValue),
      AsyncEnumerable_lift(false, false),
    );
})();

export default AsyncEnumerable_scanLast;
