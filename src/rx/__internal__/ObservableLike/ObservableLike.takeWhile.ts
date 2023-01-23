import {
  createInstanceFactory,
  include,
  init,
  mix,
} from "../../../__internal__/mixins";
import { TakeWhile } from "../../../containers";
import StatefulContainerLike__takeWhile from "../../../containers/__internal__/StatefulContainerLike/StatefulContainerLike.takeWhile";
import { TReactive } from "../../../containers/__internal__/containers.internal";
import { Predicate, pipe } from "../../../functions";
import {
  ObservableLike,
  ObserverLike,
  ObserverLike_scheduler,
} from "../../../rx";
import ObserverLike__mixin from "../ObserverLike/ObserverLike.mixin";
import SinkLike__takeWhileMixin from "../SinkLike/SinkLike.takeWhileMixin";
import ObservableLike__liftEnumerableOperatorT from "./ObservableLike.liftEnumerableOperatorT";

const ObservableLike__takeWhile: TakeWhile<ObservableLike>["takeWhile"] =
  /*@__PURE__*/ (<T>() => {
    const createTakeWhileObserver: (
      delegate: ObserverLike<T>,
      predicate: Predicate<T>,
      inclusive: boolean,
    ) => ObserverLike<T> = (<T>() => {
      const typedTakeWhileSinkMixin = SinkLike__takeWhileMixin<T>();
      const typedObserverMixin = ObserverLike__mixin<T>();

      return createInstanceFactory(
        mix(
          include(typedObserverMixin, typedTakeWhileSinkMixin),
          function TakeWhileObserver(
            instance: unknown,
            delegate: ObserverLike<T>,
            predicate: Predicate<T>,
            inclusive: boolean,
          ): ObserverLike<T> {
            init(
              typedObserverMixin,
              instance,
              delegate[ObserverLike_scheduler],
            );
            init(
              typedTakeWhileSinkMixin,
              instance,
              delegate,
              predicate,
              inclusive,
            );

            return instance;
          },
        ),
      );
    })();

    return pipe(
      createTakeWhileObserver,
      StatefulContainerLike__takeWhile<ObservableLike, T, TReactive>(
        ObservableLike__liftEnumerableOperatorT,
      ),
    );
  })();

export default ObservableLike__takeWhile;
