import {
  createInstanceFactory,
  include,
  init,
  mix,
} from "../../../__internal__/mixins";
import { TakeFirst } from "../../../containers";
import StatefulContainer$takeFirst from "../../../containers/__internal__/StatefulContainer/StatefulContainer.takeFirst";
import { pipe } from "../../../functions";
import {
  ObservableLike,
  ObserverLike,
  ObserverLike_scheduler,
} from "../../../rx";
import Observer$mixin from "../Observer/Observer.mixin";
import SinkLike_takeFirstMixin from "../Sink/Sink.takeFirstMixin";
import Observable$liftEnumerableOperatorT from "./Observable.liftEnumerableOperatorT";

const Observable$takeFirst: TakeFirst<ObservableLike>["takeFirst"] =
  /*@__PURE__*/ (() => {
    const createTakeFirstObserver: <T>(
      delegate: ObserverLike<T>,
      count: number,
    ) => ObserverLike<T> = (<T>() => {
      const typedTakeFirstSinkMixin = SinkLike_takeFirstMixin<T>();
      const typedObserverMixin = Observer$mixin<T>();

      return createInstanceFactory(
        mix(
          include(typedObserverMixin, typedTakeFirstSinkMixin),
          function TakeFirstObserver(
            instance: unknown,
            delegate: ObserverLike<T>,
            takeCount: number,
          ): ObserverLike<T> {
            init(
              typedObserverMixin,
              instance,
              delegate[ObserverLike_scheduler],
            );
            init(typedTakeFirstSinkMixin, instance, delegate, takeCount);

            return instance;
          },
        ),
      );
    })();

    return pipe(
      createTakeFirstObserver,
      StatefulContainer$takeFirst(Observable$liftEnumerableOperatorT),
    );
  })();

export default Observable$takeFirst;
