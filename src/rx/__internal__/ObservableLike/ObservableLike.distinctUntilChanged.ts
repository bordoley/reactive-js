import {
  createInstanceFactory,
  include,
  init,
  mix,
} from "../../../__internal__/mixins";
import { DistinctUntilChanged } from "../../../containers";
import StatefulContainerLike__distinctUntilChanged from "../../../containers/__internal__/StatefulContainerLike/StatefulContainerLike.distinctUntilChanged";
import { TReactive } from "../../../containers/__internal__/containers.internal";
import { Equality, pipe } from "../../../functions";
import {
  ObservableLike,
  ObserverLike,
  ObserverLike_scheduler,
} from "../../../rx";
import ObserverLike__mixin from "../ObserverLike/ObserverLike.mixin";
import SinkLike__distinctUntilChangedMixin from "../SinkLike/SinkLike.distinctUntilChangedMixin";
import ObservableLike__liftEnumerableOperatorT from "./ObservableLike.liftEnumerableOperatorT";

const distinctUntilChanged: DistinctUntilChanged<ObservableLike>["distinctUntilChanged"] =
  /*@__PURE__*/ (<T>() => {
    const createDistinctUntilChangedObserver: <T>(
      delegate: ObserverLike<T>,
      equality: Equality<T>,
    ) => ObserverLike<T> = (<T>() => {
      const typedDistinctUntilChangedSinkMixin =
        SinkLike__distinctUntilChangedMixin<T>();
      const typedObserverMixin = ObserverLike__mixin<T>();

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
      StatefulContainerLike__distinctUntilChanged<ObservableLike, T, TReactive>(
        ObservableLike__liftEnumerableOperatorT,
      ),
    );
  })();

export default distinctUntilChanged;
