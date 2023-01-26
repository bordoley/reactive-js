import {
  createInstanceFactory,
  include,
  init,
  mix,
} from "../../../__internal__/mixins";
import { TakeWhile } from "../../../containers";
import StatefulContainer$takeWhile from "../../../containers/__internal__/StatefulContainer/StatefulContainer.takeWhile";
import { TReactive } from "../../../containers/__internal__/containers.internal";
import { Predicate, pipe } from "../../../functions";
import {
  ObservableLike,
  ObserverLike,
  ObserverLike_scheduler,
} from "../../../rx";
import Observer$mixin from "../Observer/Observer.mixin";
import Sink$takeWhileMixin from "../Sink/Sink.takeWhileMixin";
import Observable$liftEnumerableOperatorT from "./Observable.liftEnumerableOperatorT";

const Observable$takeWhile: TakeWhile<ObservableLike>["takeWhile"] =
  /*@__PURE__*/ (<T>() => {
    const createTakeWhileObserver: (
      delegate: ObserverLike<T>,
      predicate: Predicate<T>,
      inclusive: boolean,
    ) => ObserverLike<T> = (<T>() => {
      const typedTakeWhileSinkMixin = Sink$takeWhileMixin<T>();
      const typedObserverMixin = Observer$mixin<T>();

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
      StatefulContainer$takeWhile<ObservableLike, T, TReactive>(
        Observable$liftEnumerableOperatorT,
      ),
    );
  })();

export default Observable$takeWhile;
