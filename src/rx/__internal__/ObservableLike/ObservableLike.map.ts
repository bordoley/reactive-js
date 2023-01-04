import {
  createInstanceFactory,
  include,
  init,
  mix,
} from "../../../__internal__/mixins";
import { Map } from "../../../containers";
import StatefulContainerLike__map from "../../../containers/__internal__/StatefulContainerLike/StatefulContainerLike.map";
import { TReactive } from "../../../containers/__internal__/containers.internal";
import { Function1, pipe } from "../../../functions";
import {
  ObservableLike,
  ObserverLike,
  ObserverLike_scheduler,
} from "../../../rx";
import ObserverLike__mixin from "../ObserverLike/ObserverLike.mixin";
import SinkLike__mapMixin from "../SinkLike/SinkLike.mapMixin";
import ObservableLike__liftEnumerableOperatorT from "./ObservableLike.liftEnumerableOperatorT";

const ObservableLike__map: Map<ObservableLike>["map"] = /*@__PURE__*/ (<
  TA,
  TB,
>() => {
  const createMapObserver: <TA, TB>(
    delegate: ObserverLike<TB>,
    predicate: Function1<TA, TB>,
  ) => ObserverLike<TA> = (<TA, TB>() => {
    const typedMapSinkMixin = SinkLike__mapMixin<TA, TB>();
    const typedObserverMixin = ObserverLike__mixin<TA>();

    return createInstanceFactory(
      mix(
        include(typedObserverMixin, typedMapSinkMixin),
        function MapObserver(
          instance: unknown,
          delegate: ObserverLike<TB>,
          mapper: Function1<TA, TB>,
        ): ObserverLike<TA> {
          init(typedObserverMixin, instance, delegate[ObserverLike_scheduler]);
          init(typedMapSinkMixin, instance, delegate, mapper);

          return instance;
        },
      ),
    );
  })();

  return pipe(
    createMapObserver,
    StatefulContainerLike__map<ObservableLike, TA, TB, TReactive>(
      ObservableLike__liftEnumerableOperatorT,
    ),
  );
})();

export default ObservableLike__map;
