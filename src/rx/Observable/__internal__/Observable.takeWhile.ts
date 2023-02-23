import {
  createInstanceFactory,
  include,
  init,
  mix,
} from "../../../__internal__/mixins.js";
import { TakeWhile } from "../../../containers.js";
import StatefulContainer_takeWhile from "../../../containers/StatefulContainer/__internal__/StatefulContainer.takeWhile.js";
import { Predicate, pipe } from "../../../functions.js";
import {
  ObservableLike,
  ObserverLike,
  ObserverLike_scheduler,
} from "../../../rx.js";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";
import Sink_takeWhileMixin from "../../Sink/__internal__/Sink.takeWhileMixin.js";
import Observable_liftEnumerableOperator from "./Observable.liftEnumerableOperator.js";
const Observable_takeWhile: TakeWhile<ObservableLike>["takeWhile"] =
  /*@__PURE__*/ (<T>() => {
    const createTakeWhileObserver: (
      delegate: ObserverLike<T>,
      predicate: Predicate<T>,
      inclusive: boolean,
    ) => ObserverLike<T> = (<T>() => {
      const typedTakeWhileSinkMixin = Sink_takeWhileMixin<T>();
      const typedObserverMixin = Observer_mixin<T>();

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
      StatefulContainer_takeWhile<ObservableLike, T>(
        Observable_liftEnumerableOperator,
      ),
    );
  })();

export default Observable_takeWhile;
