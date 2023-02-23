import {
  createInstanceFactory,
  include,
  init,
  mix,
} from "../../../__internal__/mixins.js";
import { Map } from "../../../containers.js";
import StatefulContainer_map from "../../../containers/StatefulContainer/__internal__/StatefulContainer.map.js";
import { Function1, pipe } from "../../../functions.js";
import {
  ObservableLike,
  ObserverLike,
  ObserverLike_scheduler,
} from "../../../rx.js";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";
import Sink_mapMixin from "../../Sink/__internal__/Sink.mapMixin.js";
import Observable_liftEnumerableOperatorT from "./Observable.liftEnumerableOperatorT.js";

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
    StatefulContainer_map<ObservableLike, TA, TB>(
      Observable_liftEnumerableOperatorT,
    ),
  );
})();

export default Observable_map;
