import {
  createInstanceFactory,
  include,
  init,
  mix,
} from "../../../__internal__/mixins";
import { DistinctUntilChanged } from "../../../containers";
import StatefulContainer_distinctUntilChanged from "../../../containers/__internal__/StatefulContainer/StatefulContainer.distinctUntilChanged";
import { TReactive } from "../../../containers/__internal__/containers.internal";
import { Equality, pipe } from "../../../functions";
import {
  ObservableLike,
  ObserverLike,
  ObserverLike_scheduler,
} from "../../../rx";
import Observer_mixin from "../Observer/Observer.mixin";
import Sink_distinctUntilChangedMixin from "../Sink/Sink.distinctUntilChangedMixin";
import Observable_liftEnumerableOperatorT from "./Observable.liftEnumerableOperatorT";

const Observable_distinctUntilChanged: DistinctUntilChanged<ObservableLike>["distinctUntilChanged"] =
  /*@__PURE__*/ (<T>() => {
    const createDistinctUntilChangedObserver: <T>(
      delegate: ObserverLike<T>,
      equality: Equality<T>,
    ) => ObserverLike<T> = (<T>() => {
      const typedDistinctUntilChangedSinkMixin =
        Sink_distinctUntilChangedMixin<T>();
      const typedObserverMixin = Observer_mixin<T>();

      return createInstanceFactory(
        mix(
          include(typedObserverMixin, typedDistinctUntilChangedSinkMixin),
          function DistinctUntilChangedObserver(
            instance: unknown,
            delegate: ObserverLike<T>,
            equality: Equality<T>,
          ): ObserverLike<T> {
            init(
              typedObserverMixin,
              instance,
              delegate[ObserverLike_scheduler],
            );
            init(
              typedDistinctUntilChangedSinkMixin,
              instance,
              delegate,
              equality,
            );

            return instance;
          },
        ),
      );
    })();

    return pipe(
      createDistinctUntilChangedObserver,
      StatefulContainer_distinctUntilChanged<ObservableLike, T, TReactive>(
        Observable_liftEnumerableOperatorT,
      ),
    );
  })();

export default Observable_distinctUntilChanged;
