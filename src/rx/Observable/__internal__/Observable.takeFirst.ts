import {
  createInstanceFactory,
  include,
  init,
  mix,
} from "../../../__internal__/mixins.js";
import { TakeFirst } from "../../../containers.js";
import StatefulContainer_takeFirst from "../../../containers/StatefulContainer/__internal__/StatefulContainer.takeFirst.js";
import { pipe } from "../../../functions.js";
import {
  ObservableLike,
  ObserverLike,
  ObserverLike_scheduler,
} from "../../../rx.js";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";
import SinkLike_takeFirstMixin from "../../Sink/__internal__/Sink.takeFirstMixin.js";
import Observable_liftEnumerableOperatorT from "./Observable.liftEnumerableOperatorT.js";

const Observable_takeFirst: TakeFirst<ObservableLike>["takeFirst"] =
  /*@__PURE__*/ (() => {
    const createTakeFirstObserver: <T>(
      delegate: ObserverLike<T>,
      count: number,
    ) => ObserverLike<T> = (<T>() => {
      const typedTakeFirstSinkMixin = SinkLike_takeFirstMixin<T>();
      const typedObserverMixin = Observer_mixin<T>();

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
      StatefulContainer_takeFirst(Observable_liftEnumerableOperatorT),
    );
  })();

export default Observable_takeFirst;
