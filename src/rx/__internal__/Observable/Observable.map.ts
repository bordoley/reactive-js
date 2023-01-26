import {
  createInstanceFactory,
  include,
  init,
  mix,
} from "../../../__internal__/mixins";
import { Map } from "../../../containers";
import StatefulContainer_map from "../../../containers/__internal__/StatefulContainer/StatefulContainer.map";
import { TReactive } from "../../../containers/__internal__/containers.internal";
import { Function1, pipe } from "../../../functions";
import {
  ObservableLike,
  ObserverLike,
  ObserverLike_scheduler,
} from "../../../rx";
import Observer_mixin from "../Observer/Observer.mixin";
import Sink_mapMixin from "../Sink/Sink.mapMixin";
import Observable_liftEnumerableOperatorT from "./Observable.liftEnumerableOperatorT";

const Observable_map: Map<ObservableLike>["map"] = /*@__PURE__*/ (<
  TA,
  TB,
>() => {
  const createMapObserver: <TA, TB>(
    delegate: ObserverLike<TB>,
    predicate: Function1<TA, TB>,
  ) => ObserverLike<TA> = (<TA, TB>() => {
    const typedMapSinkMixin = Sink_mapMixin<TA, TB>();
    const typedObserverMixin = Observer_mixin<TA>();

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
    StatefulContainer_map<ObservableLike, TA, TB, TReactive>(
      Observable_liftEnumerableOperatorT,
    ),
  );
})();

export default Observable_map;
