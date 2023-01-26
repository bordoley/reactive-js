import {
  createInstanceFactory,
  include,
  init,
  mix,
} from "../../../__internal__/mixins";
import { Map } from "../../../containers";
import StatefulContainer$map from "../../../containers/__internal__/StatefulContainer/StatefulContainer.map";
import { TReactive } from "../../../containers/__internal__/containers.internal";
import { Function1, pipe } from "../../../functions";
import {
  ObservableLike,
  ObserverLike,
  ObserverLike_scheduler,
} from "../../../rx";
import Observer$mixin from "../Observer/Observer.mixin";
import Sink$mapMixin from "../Sink/Sink.mapMixin";
import Observable$liftEnumerableOperatorT from "./Observable.liftEnumerableOperatorT";

const Observable$map: Map<ObservableLike>["map"] = /*@__PURE__*/ (<
  TA,
  TB,
>() => {
  const createMapObserver: <TA, TB>(
    delegate: ObserverLike<TB>,
    predicate: Function1<TA, TB>,
  ) => ObserverLike<TA> = (<TA, TB>() => {
    const typedMapSinkMixin = Sink$mapMixin<TA, TB>();
    const typedObserverMixin = Observer$mixin<TA>();

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
    StatefulContainer$map<ObservableLike, TA, TB, TReactive>(
      Observable$liftEnumerableOperatorT,
    ),
  );
})();

export default Observable$map;
