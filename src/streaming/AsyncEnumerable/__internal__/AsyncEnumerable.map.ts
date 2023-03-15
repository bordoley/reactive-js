import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { Map } from "../../../containers.js";
import { Function1, partial, pipe } from "../../../functions.js";
import { ObservableLike } from "../../../rx.js";
import Observable_map from "../../../rx/Observable/__internal__/Observable.map.js";
import { AsyncEnumerableLike, StreamLike } from "../../../streaming.js";
import AsyncEnumerable_lift from "./AsyncEnumerable.lift.js";
import AsyncEnumerator_delegatingMixin from "./AsyncEnumerator.delegatingMixin.js";

const AsyncEnumerable_map: Map<AsyncEnumerableLike>["map"] = /*@__PURE__*/ (<
  TA,
  TB,
>() => {
  const createMapStream = createInstanceFactory(
    mix(
      include(AsyncEnumerator_delegatingMixin<TA, TB>()),
      function MapStream(
        instance: unknown,
        delegate: StreamLike<void, TA>,
        mapper: Function1<TA, TB>,
      ): StreamLike<void, TB> {
        init(
          AsyncEnumerator_delegatingMixin<TA, TB>(),
          instance,
          delegate,
          Observable_map<ObservableLike, TA, TB>(mapper),
        );

        return instance;
      },
      props({}),
      {},
    ),
  );

  return ((mapper: Function1<TA, TB>) =>
    pipe(
      createMapStream,
      partial(mapper),
      AsyncEnumerable_lift(true, true),
    )) as Map<AsyncEnumerableLike>["map"];
})();

export default AsyncEnumerable_map;
