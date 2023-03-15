import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { Scan } from "../../../containers.js";
import { Factory, Reducer, partial, pipe } from "../../../functions.js";
import { ObservableLike } from "../../../rx.js";
import Observable_scan from "../../../rx/Observable/__internal__/Observable.scan.js";
import { AsyncEnumerableLike, StreamLike } from "../../../streaming.js";
import AsyncEnumerable_lift from "./AsyncEnumerable.lift.js";
import AsyncEnumerator_delegatingMixin from "./AsyncEnumerator.delegatingMixin.js";

const AsyncEnumerable_scan: Scan<AsyncEnumerableLike>["scan"] = /*@__PURE__*/ (<
  T,
  TAcc,
>() => {
  const createScanStream = createInstanceFactory(
    mix(
      include(AsyncEnumerator_delegatingMixin<T, TAcc>()),
      function ScanStream(
        instance: unknown,
        delegate: StreamLike<void, T>,
        reducer: Reducer<T, TAcc>,
        acc: Factory<TAcc>,
      ): StreamLike<void, TAcc> {
        init(
          AsyncEnumerator_delegatingMixin<T, TAcc>(),
          instance,
          delegate,
          Observable_scan<ObservableLike, T, TAcc>(reducer, acc),
        );

        return instance;
      },
      props({}),
      {},
    ),
  );

  return ((reducer: Reducer<T, TAcc>, initialValue: Factory<TAcc>) =>
    pipe(
      createScanStream,
      partial(reducer, initialValue),
      AsyncEnumerable_lift(true, true),
    )) as Scan<AsyncEnumerableLike>["scan"];
})();

export default AsyncEnumerable_scan;
